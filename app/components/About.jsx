var React = require('react');
var {Link} = require('react-router');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About This Application</h1>
      <p>This is a weather application built on React. Here are some of the things I used to create this Application and where my source code is stored.</p>
      <ol>
        <li>
          <a href='https://github.com/erikbonn/ReactWeather'>See the Github repository for this application</a>
        </li>
        <li>
          <a href='https://facebook.github.io/react'>Learn More About React.js</a>
        </li>
        <li>
          <a href='https://openweathermap.org/current'>See the Open Weather Map API used to fetch current weather conditions</a>
        </li>
        <li>
          <a href='https://www.heroku.com/home'>Learn more about deploying with Heroku</a>
        </li>
        <li>
          <a href='https://foundation.zurb.com/develop/getting-started.html'>See how I did my stying using Foundation</a>
        </li>
      </ol>
    </div>
  )
};

module.exports = About;
