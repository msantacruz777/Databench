import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const WorldMap: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    const width = 600;
    const height = 300;

    // Clear previous content
    svg.selectAll('*').remove();

    // Projection
    const projection = d3.geoMercator()
      .scale(90)
      .translate([width / 2, height / 1.5]);

    const path = d3.geoPath().projection(projection);

    // Simplified world map data
    d3.json('https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson')
      .then((data: any) => {
        svg.append('g')
          .selectAll('path')
          .data(data.features)
          .enter()
          .append('path')
          .attr('d', path as any)
          .attr('fill', '#f1f5f9') // slate-100
          .attr('stroke', '#cbd5e1') // slate-300
          .attr('stroke-width', 0.8)
          .attr('opacity', 1);

        // Locations with specific label offsets and adjusted coordinates to avoid dot overlap
        const locations = [
          { name: 'Toronto', coords: [-78.8, 44.0] as [number, number], dx: 6, dy: -4 },
          { name: 'Waterloo', coords: [-81.5, 43.0] as [number, number], dx: 6, dy: 12 },
          { name: 'London', coords: [-0.12, 51.50] as [number, number], dx: 6, dy: 4 },
          { name: 'UAE', coords: [55.27, 25.20] as [number, number], dx: 6, dy: 4 }
        ];

        // Add markers
        const markers = svg.append('g');

        markers.selectAll('circle')
          .data(locations)
          .enter()
          .append('circle')
          .attr('cx', d => projection(d.coords as [number, number])![0])
          .attr('cy', d => projection(d.coords as [number, number])![1])
          .attr('r', 4)
          .attr('fill', '#1e293b') // slate-800
          .attr('stroke', '#fff')
          .attr('stroke-width', 1.5)
          .attr('class', 'animate-pulse');
      });

  }, []);

  return (
    <svg 
      ref={svgRef} 
      viewBox="0 0 600 300" 
      className="w-full h-full"
      style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.05))' }}
    />
  );
};

export default WorldMap;
