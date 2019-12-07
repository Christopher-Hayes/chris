'use strict';

class Nav extends React.Component {

  constructor(props) {
    super(props);
    this.state = { page: '' };
  }

  render() {
    return (
      <nav class="navbar navbar-expand-lg">
        <a class="navbar-brand" href="https://chris.js.org"><h4 class="pt-1">chris.js.org</h4></a>
        <button class="navbar-toggler navbar-dark" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="index.html">Blog</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="projects.html">Projects</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="toolbox.html">Toolbox</a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="toolbox.html">Photography<span class="sr-only">(current)</span></a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

let domContainer = document.querySelector('#nav');
ReactDOM.render(<Nav />, domContainer);
