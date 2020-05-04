const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const colors = [
  '#1814d2',
  '#306be3',
  '#0bb2ff',
  '#24c6bc',
  '#80cf80',
  '#deef20',
  '#f7d98a',
  '#e6b64e',
  '#d08032',
  '#d2613f',
  '#d53e3e',
];

function drawHeatmap(dataset) {
  const width = 900,
    height = 500,
    padding = 60,
    cellHeight = (height - 2 * padding) / 12,
    cellWidth = width / Math.floor(dataset.length / 12);

  const yScale = d3
    .scaleBand()
    .domain(dataset.map((d) => d3.timeParse('%m')(d.month)))
    .range([30, height - 30]);

  const xScale = d3
    .scaleLinear()
    .domain([d3.min(dataset, (d) => d.year), d3.max(dataset, (d) => d.year)])
    .range([120, width - padding]);

  const tempScale = d3
    .scaleLinear()
    .domain([d3.min(dataset, (d) => d.temp), d3.max(dataset, (d) => d.temp)])
    .range([0, 10]);

  const tooltip = d3
    .select('body')
    .append('div')
    .attr('id', 'tooltip')
    .attr('class', 'tooltip')
    .style('opacity', 0);

  const svg = d3
    .select('#heatmap')
    .append('svg')
    .attr('width', width)
    .attr('height', height);

  svg
    .selectAll('rect')
    .data(dataset)
    .enter()
    .append('rect')
    .attr('class', 'cell')
    .attr('data-month', (d) => d.month - 1)
    .attr('data-year', (d) => d.year)
    .attr('data-temp', (d) => d.temp)
    .attr('fill', (d) => colors[Math.floor(tempScale(d.temp))])
    .attr('x', (d) => xScale(d.year))
    .attr('y', (d) => yScale(d3.timeParse('%m')(d.month)))
    .attr('height', cellHeight)
    .attr('width', cellWidth)
    .on('mouseover', (d, i) => {
      tooltip.transition().duration(200).style('opacity', 0.8);
      tooltip
        .html(`${months[d.month - 1]} ${d.year}<br>${d.temp}°C</p>`)
        .attr('data-year', d.year)
        .style('left', `${d3.event.pageX + 5}px`)
        .style('top', `${d3.event.pageY}px`);
    })
    .on('mouseout', (d) => {
      tooltip.transition().duration(200).style('opacity', 0);
    });

  const xAxis = d3.axisBottom(xScale).tickFormat(d3.format('d'));

  svg
    .append('g')
    .attr('id', 'x-axis')
    .attr('transform', `translate(0, ${height - 30})`)
    .call(xAxis);

  svg
    .append('g')
    .attr('id', 'y-axis')
    .attr('transform', `translate(120, 0)`)
    .call(d3.axisLeft(yScale).tickFormat(d3.timeFormat('%B')));

  svg
    .append('text')
    .attr('class', 'axis-label')
    .attr('transform', 'rotate(-90)')
    .attr('x', 100)
    .attr('y', 100)
    .text('Month');

  svg
    .append('text')
    .attr('x', width / 2 - 65)
    .attr('y', height + 45)
    .text('Year');

  const legend = d3.select('#heatmap').append('svg').attr('id', 'legend');

  legend
    .selectAll('rect')
    .data(colors)
    .enter()
    .append('rect')
    .attr('x', (d, i) => i * 60)
    .attr('y', 5)
    .attr('width', 60)
    .attr('height', 15)
    .attr('fill', (d) => d);

  legend
    .selectAll('text')
    .data(colors)
    .enter()
    .append('text')
    .attr('x', (d, i) => i * 60)
    .attr('y', 35)
    .text((d, i) => `${i * 2}°C`);
}
d3.json(
  'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json'
).then((data) => {
  let dataset = data.monthlyVariance;

  dataset = dataset.map((d) => ({
    ...d,
    temp: data.baseTemperature - d.variance,
  }));

  drawHeatmap(dataset);
});
