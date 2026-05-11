import React, { useEffect, useRef, useMemo } from 'react';
import * as d3 from 'd3';
import { motion } from 'motion/react';

const WorldMap: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  const locations = useMemo(() => [
    { id: 'toronto', name: 'Toronto', coords: [-77.0, 46.0] as [number, number] },
    { id: 'waterloo', name: 'Waterloo', coords: [-83.0, 42.0] as [number, number] },
    { id: 'london', name: 'London', coords: [-0.12, 51.50] as [number, number] },
    { id: 'uae', name: 'UAE', coords: [55.27, 25.20] as [number, number] }
  ], []);

  // Connections for the network graph
  const connections = [
    { from: 'toronto', to: 'london' },
    { from: 'waterloo', to: 'london' },
    { from: 'london', to: 'uae' },
    { from: 'toronto', to: 'uae' }
  ];

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    const width = 800;
    const height = 450;

    // Clear previous content
    svg.selectAll('*').remove();

    // Define Glow Filter
    const defs = svg.append('defs');
    
    const filter = defs.append('filter')
      .attr('id', 'glow')
      .attr('x', '-50%')
      .attr('y', '-50%')
      .attr('width', '200%')
      .attr('height', '200%');

    filter.append('feGaussianBlur')
      .attr('stdDeviation', '2.5')
      .attr('result', 'blur');
    
    filter.append('feComposite')
      .attr('in', 'SourceGraphic')
      .attr('in2', 'blur')
      .attr('operator', 'over');

    // Projection
    const projection = d3.geoMercator()
      .scale(120)
      .translate([width / 2.2, height / 1.6]);

    const path = d3.geoPath().projection(projection);

    // Main map container
    const g = svg.append('g');

    // Draw Map
    d3.json('https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson')
      .then((data: any) => {
        // Background Countries
        g.append('g')
          .selectAll('path')
          .data(data.features)
          .enter()
          .append('path')
          .attr('d', path as any)
          .attr('fill', '#dce3ea') // Light blue-gray
          .attr('stroke', '#ffffff') // White border
          .attr('stroke-width', 0.5)
          .attr('opacity', 1);

        // Location positions
        const posMap = new Map(locations.map(d => [d.id, projection(d.coords)!]));

        // Connections (Knowledge Graph Lines)
        const connectionsGroup = g.append('g').attr('class', 'connections');
        
        connections.forEach(conn => {
          const start = posMap.get(conn.from)!;
          const end = posMap.get(conn.to)!;
          
          // Bezier curve path
          const dx = end[0] - start[0];
          const dy = end[1] - start[1];
          const dr = Math.sqrt(dx * dx + dy * dy);
          
          const pathStr = `M${start[0]},${start[1]}A${dr},${dr} 0 0,1 ${end[0]},${end[1]}`;
          
          // Base static line
          connectionsGroup.append('path')
            .attr('d', pathStr)
            .attr('fill', 'none')
            .attr('stroke', '#0d9488') // Deeper Teal
            .attr('stroke-width', 1)
            .attr('opacity', 0.1);

          // Animated dashing line
          const animatedLine = connectionsGroup.append('path')
            .attr('d', pathStr)
            .attr('fill', 'none')
            .attr('stroke', '#0d9488')
            .attr('stroke-width', 1.5)
            .attr('stroke-dasharray', '4, 12')
            .attr('filter', 'url(#glow)');

          // Animation logic for the path
          const totalLength = animatedLine.node()?.getTotalLength() || 0;
          animatedLine
            .attr('stroke-dashoffset', totalLength)
            .transition()
            .duration(3000 + Math.random() * 2000)
            .ease(d3.easeLinear)
            .attr('stroke-dashoffset', 0)
            .on('end', function repeat() {
              d3.select(this)
                .attr('stroke-dashoffset', totalLength)
                .transition()
                .duration(3000 + Math.random() * 2000)
                .ease(d3.easeLinear)
                .attr('stroke-dashoffset', 0)
                .on('end', repeat);
            });
        });

        // Pulsing Dots
        const markers = g.append('g').attr('class', 'markers');

        locations.forEach(loc => {
          const [cx, cy] = projection(loc.coords)!;

          // Static core
          markers.append('circle')
            .attr('cx', cx)
            .attr('cy', cy)
            .attr('r', 3)
            .attr('fill', '#0d9488')
            .attr('filter', 'url(#glow)');

          // Pulsing rings
          const animatePulse = () => {
            markers.append('circle')
              .attr('cx', cx)
              .attr('cy', cy)
              .attr('r', 3)
              .attr('fill', 'none')
              .attr('stroke', '#0d9488')
              .attr('stroke-width', 1)
              .attr('opacity', 0.8)
              .transition()
              .duration(2000)
              .ease(d3.easeCubicOut)
              .attr('r', 15)
              .attr('opacity', 0)
              .remove()
              .on('end', animatePulse);
          };

          // Delay startup of pulses slightly for organic feel
          setTimeout(animatePulse, Math.random() * 2000);
        });
      });

  }, [locations]);

  return (
    <div className="w-full h-full bg-[#f8fafc] rounded-[2.5rem] overflow-hidden relative shadow-inner border border-slate-100">
      <svg 
        ref={svgRef} 
        viewBox="0 0 800 450" 
        className="w-full h-full"
      />
      {/* Decorative Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-slate-200/20 to-transparent" />
      <div className="absolute top-4 left-6">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-teal-600 animate-pulse" />
          <span className="text-[10px] font-bold text-teal-600/80 uppercase tracking-[0.2em]">Live Data Network</span>
        </div>
      </div>
    </div>
  );
};

export default WorldMap;
