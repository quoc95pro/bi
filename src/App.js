import React, { Component } from 'react';
import './App.css';

// import ChoroplethMap from './components/ChoroplethMap';
import ChoroplethMapVN from './components/ChoroplethMapVN';
import LineChart from './components/LineChart';


class App extends Component {
  state = {
    data: [
      ["MB", 75], ["SK", 43], ["AB", 50], ["BC", 88], ["NU", 21], ["NT", 43],
      ["YT", 21], ["ON", 19], ["QC", 60], ["NB", 4], ["NS", 44], ["NF", 38],
      ["PE", 67]],
    dataVN: [
      ["QN", 32], ["TN", 35], ["DB", 23], ["DD", 23], ["TY", 34], ["LI", 54], ["LS", 76], ["SL", 34], ["TH", 44], ["TQ", 33], ["YB", 55], ["HO", 66],
      ["HD", 34], ["HP", 65], ["SH", 54], ["HN", 66], ["BN", 67], ["VC", 89],
      ["NB", 44], ["HM", 67], ["PT", 45], ["BG", 67], ["TB", 12], ["HT", 98],
      ["NA", 76], ["QB", 56], ["DL", 76], ["GL", 56], ["KH", 87], ["LD", 34],
      ["NT", 44], ["PY", 67], ["BI", 7], ["TG", 66], ["DK", 34], ["BP", 23],
      ["BD", 54], ["KT", 34], ["QA", 23], ["QG", 12], ["QT", 45], ["TT", 63],
      ["DA", 15], ["BV", 54], ["BU", 67], ["DO", 26], ["AG", 67], ["CT", 98],
      ["DT", 43], ["HC", 77], ["KG", 88], ["LA", 88], ["BR", 35], ["GH", 64],
      ["BL", 34], ["CM", 43], ["ST", 23], ["TV", 43], ["VL", 12], ["CB", 43],
      ["ND", 42], ["HL", 76], ["LO", 45], ["HG", 22], ["", 22]
    ]
  }
  render() {
    return (
      <div>
        <div>
          <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <a class="navbar-brand" href="#">Main</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarColor02">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="#0">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#0">Page 1</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#0">Page 2</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#0">Page 3</a>
                </li>
              </ul>

            </div>
          </nav>

        </div>
        <div className="container-fluid container-index contain-custom">
          {/* <div style={{
          height: "100vh",
          width: "100vw"
        }}>
          <ChoroplethMapVN data={this.state.dataVN} />
        </div> */}
          <div className='row'>
            <div className='col-md-8 col-8 col-lg-8'>
              <div className='row'>
                <div className='col-md-4 col-4 col-lg-4'><LineChart type='line'></LineChart></div>
                <div className='col-md-4 col-4 col-lg-4'><LineChart type='line'></LineChart></div>
                <div className='col-md-4 col-4 col-lg-4'><LineChart type='line'></LineChart></div>
              </div>
              <div className='row'>
                <div className='col-md-6'><LineChart type='area'></LineChart></div>
                <div className='col-md-6'><LineChart type='radar'></LineChart></div>
              </div>
              <div className='row'>
                <div className='col-md-6'><LineChart type='line'></LineChart></div>
                <div className='col-md-6'><LineChart type='heatmap'></LineChart></div>
              </div>
            </div>

            <div className='col-md-4'>
              <div style={{
                height: "100%",
                width: "100%"
              }}>
                <ChoroplethMapVN data={this.state.dataVN} />
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
