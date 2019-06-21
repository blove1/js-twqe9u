// Import stylesheets
import '@grapecity/wijmo.styles/wijmo.css';
import './style.css';

import "@grapecity/wijmo";
import "@grapecity/wijmo.input";
import "@grapecity/wijmo.grid";
import "@grapecity/wijmo.viewer";

// Write Javascript code!
const viewer = new wijmo.viewer.ReportViewer('#viewer', {
  serviceUrl: 'https://demos.componentone.com/ASPNET/c1webapi/4.0.20172.105/api/report',
  filePath: 'ReportsRoot/Formatting/AlternateBackground.flxr',
  reportName: 'AlternateBackground',
  refreshed: function (sender) {
    //let exportBtn = sender.hostElement.querySelector('.wj-exportformats-wrapper .wj-applybutton');
     //exportBtn.style.display = 'none';

    var exportBtn = sender.hostElement.querySelector('a[class~="wj-btn"][title="Export"][command-tag="28"]');
    //exportBtn.style.display = 'none';
    var newExportBtn = exportBtn.cloneNode(true);
    exportBtn.parentNode.replaceChild(newExportBtn, exportBtn);
    
    newExportBtn.addEventListener("click", function(e) {
      alert("Do your own export here");
    });
  }
});