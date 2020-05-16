const width = 960;
const height = 960;

const genre = [
  'Action',
  'Drama',
  'Adventure',
  'Family',
  'Animation',
  'Comedy',
  'Biography',
];

const tooltip = d3
  .select('body')
  .append('div')
  .attr('id', 'tooltip')
  .style('opacity', 0);

const svg = d3
  .select('#container')
  .append('svg')
  .attr('width', width)
  .attr('height', height);

function drawTreemap(data) {
  let root = d3.hierarchy(data);

  const treemap = d3
    .treemap()
    .size([width, height])
    .paddingOuter(0)
    .paddingInner(1);

  root
    .sum((d) => (d.hasOwnProperty('value') ? d.value : 0))
    .sort((a, b) => b.value - a.value);

  treemap(root);

  var g = d3
    .select('svg')
    .selectAll('.tile')
    .data(root.leaves())
    .enter()
    .append('g')
    .attr('transform', (d) => 'translate(' + d.x0 + ',' + d.y0 + ')');

  g.append('rect')
    .attr('class', 'tile')
    .attr('data-name', (d) => d.data.name)
    .attr('data-category', (d) => d.data.category)
    .attr('data-value', (d) => d.value)
    .attr('width', (d) => d.x1 - d.x0)
    .attr('height', (d) => d.y1 - d.y0)
    .style('fill', (d) => {
      while (d.depth > 1) d = d.parent;
      let index = 0;
      data.children.forEach((obj) => {
        if (obj.name === d.data.name) {
          index = data.children.indexOf(obj);
        }
      });
      return d3.schemeDark2[index + 1];
    })
    .on('mouseover', (d, i) => {
      tooltip.transition().duration(200).style('opacity', 0.9);
      tooltip
        .html(`Gross amount: $${d3.format('~s')(d.value)}M `)
        .attr('data-value', d.value)
        .style('left', d3.event.pageX + 10 + 'px')
        .style('top', d3.event.pageY - 28 + 'px');
    })
    .on('mouseout', (d) => {
      tooltip.transition().duration(200).style('opacity', 0);
    });

  g.append('text')
    .attr('class', 'tile-label')
    .selectAll('tspan')
    .data((d) => d.data.name.split(/(?=[A-Z][^A-Z])/g))
    .enter()
    .append('tspan')
    .attr('x', 4)
    .attr('y', (d, i) => 13 + i * 10)
    .text((d) => d);

  const legend = d3
    .select('#legend-container')
    .append('svg')
    .attr('id', 'legend')
    .attr('width', width)
    .attr('height', 50);

  legend
    .selectAll('rect')
    .data(genre)
    .enter()
    .append('rect')
    .attr('class', 'legend-item')
    .attr('x', (d, i) => i * 110 + 100)
    .attr('y', 20)
    .attr('width', 15)
    .attr('height', 15)
    .attr('fill', (d) => {
      let index = genre.indexOf(d);
      return d3.schemeDark2[index + 1];
    });

  legend
    .selectAll('text')
    .data(genre)
    .enter()
    .append('text')
    .attr('x', (d, i) => i * 110 + 120)
    .attr('y', 33)
    .text((d) => d);
}

d3.json(
  'https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/movie-data.json'
).then((dataset) => {
  let data = dataset;
  drawTreemap(data);
});
