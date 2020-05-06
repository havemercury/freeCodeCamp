const width = 960;
const height = 600;

const tooltip = d3
  .select('body')
  .append('div')
  .attr('class', 'tooltip')
  .attr('id', 'tooltip')
  .style('opacity', 0);

const svg = d3
  .select('#choropleth')
  .append('svg')
  .attr('width', width)
  .attr('height', height);

const path = d3.geoPath();

// legend
const x = d3.scaleLinear().domain([2.6, 75.1]).rangeRound([600, 860]);

const color = d3
  .scaleThreshold()
  .domain(d3.range(2.6, 75.1, (75.1 - 2.6) / 8))
  .range(d3.schemeGreens[9]);

const g = svg
  .append('g')
  .attr('class', 'key')
  .attr('id', 'legend')
  .attr('transform', 'translate(0,40)');

g.selectAll('rect')
  .data(
    color.range().map((d) => {
      d = color.invertExtent(d);
      if (d[0] == null) d[0] = x.domain()[0];
      if (d[1] == null) d[1] = x.domain()[1];
      return d;
    })
  )
  .enter()
  .append('rect')
  .attr('height', 8)
  .attr('x', (d) => x(d[0]))
  .attr('width', (d) => x(d[1]) - x(d[0]))
  .attr('fill', (d) => color(d[0]));

g.append('text')
  .attr('class', 'caption')
  .attr('x', x.range()[0])
  .attr('y', -6)
  .attr('fill', '#000')
  .attr('text-anchor', 'start')
  .attr('font-weight', 'bold');

g.call(
  d3
    .axisBottom(x)
    .tickSize(13)
    .tickFormat((x) => Math.round(x) + '%')
    .tickValues(color.domain()))
  .select('.domain')
  .remove();

// map
Promise.all([
  d3.json('https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/for_user_education.json'),
  d3.json('https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/counties.json')
]).then(([educationData, us]) => {
  const education = new Map(educationData.map(obj => [obj.fips, obj.bachelorsOrHigher]));
  drawChoropleth(educationData, education, us);
})

function drawChoropleth(educationData, education, us) {
  svg.append('g')
    .selectAll('path')
    .data(topojson.feature(us, us.objects.counties).features)
    .join('path')
    .attr('fill', d => color(education.get(d.id)))
    .attr('d', path)
    .attr('class', 'county')
    .attr('data-fips', d => d.id)
    .attr('data-education', d => education.get(d.id))
    .on('mouseover', (d, i) => {
      const countyData = educationData.find(element => element.fips === d.id);
      tooltip.transition().duration(200).style('opacity', 0.9);
      tooltip
        .html(
          `${countyData.area_name}, ${countyData.state}: ${countyData.bachelorsOrHigher}%`
        )
        .attr('data-education', countyData.bachelorsOrHigher)
        .style('left', `${d3.event.pageX + 5}px`)
        .style('top', `${d3.event.pageY}px`);
    })
    .on('mouseout', (d) => {
      tooltip.transition().duration(200).style('opacity', 0);
    });

  svg.append("path")
    .datum(topojson.mesh(us, us.objects.states), (a, b) => a !== b)
    .attr("fill", "none")
    .attr("stroke", "white")
    .attr("stroke-linejoin", "round")
    .attr("d", path)
}