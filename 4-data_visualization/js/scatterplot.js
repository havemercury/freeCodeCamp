const drawScatterplot = (dataset) => {
  const margin = {
      top: 20,
      right: 50,
      bottom: 75,
      left: 100,
    },
    width = 860,
    height = 400;

  const minYear = d3.min(dataset, (d) => d.Year);
  const maxYear = d3.max(dataset, (d) => d.Year);
  const xAxisScale = d3
    .scaleLinear()
    .domain([minYear - 1, maxYear + 1])
    .range([0, width]);

  const minTime = d3.min(dataset, (d) => d.Time);
  const maxTime = d3.max(dataset, (d) => d.Time);
  const yAxisScale = d3
    .scaleTime()
    .domain([minTime, maxTime])
    .range([0, height]);

  const timeFormat = d3.timeFormat('%M:%S');
  const xAxis = d3.axisBottom(xAxisScale).tickFormat(d3.format('d'));
  const yAxis = d3.axisLeft(yAxisScale).tickFormat(timeFormat);

  const tooltip = d3
    .select('body')
    .append('div')
    .attr('id', 'tooltip')
    .attr('class', 'tooltip')
    .style('opacity', 0);

  const svg = d3
    .select('#scatterplot')
    .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', `translate(${margin.left}, ${margin.top})`);

  svg
    .selectAll('circle')
    .data(dataset)
    .enter()
    .append('circle')
    .attr('class', 'dot')
    .attr('data-xvalue', (d) => d.Year)
    .attr('data-yvalue', (d) => d.Time)
    .attr('cx', (d) => xAxisScale(d.Year))
    .attr('cy', (d) => yAxisScale(d.Time))
    .attr('r', (d) => 5)
    .attr('fill', (d) => (d.Doping === '' ? '#cd3700' : '#ffd300'))
    .attr('stroke', 'black')
    .attr('stroke-width', '1')
    .on('mouseover', (d) => {
      tooltip.transition().duration(200).style('opacity', 0.8);
      tooltip
        .html(
          `<strong>Name:</strong> ${d.Name}<br>
          <strong>Country:</strong> ${d.Nationality}<br>
          <strong>Place:</strong> ${d.Place}`
        )
        .attr('data-year', d.Year)
        .style('left', `${d3.event.pageX + 5}px`)
        .style('top', `${d3.event.pageY}px`);
    })
    .on('mouseout', (d) => {
      tooltip.transition().duration(200).style('opacity', 0);
    });

  svg
    .append('text')
    .attr('class', 'axis-label')
    .attr('transform', 'rotate(-90)')
    .attr('x', -250)
    .attr('y', -55)
    .text('Time (minutes)');

  svg
    .append('text')
    .attr('x', width / 2 - 65)
    .attr('y', height + 45)
    .text('Year');

  svg
    .append('g')
    .attr('id', 'x-axis')
    .attr('class', 'axis')
    .attr('transform', `translate(0, ${height})`)
    .call(xAxis);

  svg.append('g').attr('id', 'y-axis').attr('class', 'axis').call(yAxis);

  const legend = svg.append('g').attr('id', 'legend');

  legend
    .append('text')
    .attr('x', width - 175)
    .attr('y', 65)
    .attr('class', 'legend-title')
    .text('Legend');

  legend
    .append('rect')
    .attr('x', width - 250)
    .attr('y', 82)
    .attr('width', 15)
    .attr('height', 15)
    .attr('fill', '#cd3700');

  legend
    .append('text')
    .attr('x', width - 225)
    .attr('y', 95)
    .text('With doping allegations');

  legend
    .append('rect')
    .attr('x', width - 250)
    .attr('y', 107)
    .attr('width', 15)
    .attr('height', 15)
    .attr('fill', '#ffd300');

  legend
    .append('text')
    .attr('x', width - 225)
    .attr('y', 120)
    .text('Without doping allegations');
};

d3.json(
  'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json'
).then((dataset) => {
  const parseTime = d3.timeParse('%M:%S');
  dataset.forEach((obj) => {
    obj.Time = parseTime(obj.Time);
  });
  drawScatterplot(dataset);
});
