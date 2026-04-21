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

    // Simplified world map data (low-res for speed and minimal look)
    // In a real app, we'd fetch a proper GeoJSON. 
    // For this demo, I'll use a basic set of coordinates for continents or a simple fetch.
    
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

        // Locations
        const locations = [
          { name: 'Toronto', coords: [-79.38, 43.65] },
          { name: 'Kitchener', coords: [-80.48, 43.45] },
          { name: 'London', coords: [-0.12, 51.50] }, // London, UK
          { name: 'UAE', coords: [55.27, 25.20] } // Dubai
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

        // Add labels on hover or static
        markers.selectAll('text')
          .data(locations)
          .enter()
          .append('text')
          .attr('x', d => projection(d.coords as [number, number])![0] + 6)
          .attr('y', d => projection(d.coords as [number, number])![1] + 4)
          .text(d => d.name)
          .attr('font-size', '8px')
          .attr('font-weight', 'bold')
          .attr('fill', '#0f172a') // slate-950
          .attr('class', 'pointer-events-none opacity-0 transition-opacity duration-300')
          .attr('id', (d, i) => `label-${i}`);

        // Interactive behavior
        svg.selectAll('circle')
          .on('mouseenter', function(event, d: any) {
            d3.select(this).transition().attr('r', 6);
            // Show label (simplified)
          })
          .on('mouseleave', function(event, d: any) {
            d3.select(this).transition().attr('r', 4);
          });
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
