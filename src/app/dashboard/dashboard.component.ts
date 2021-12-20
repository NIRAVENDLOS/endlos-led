import { Component } from "@angular/core";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent {

  rows = [];

  systems = [
    {
      name: "Lights",
      on: false
    },
    {
      name: "Surround Sound",
      on: true
    },
    {
      name: "T.V.",
      on: true
    },
    {
      name: "Entertainment System",
      on: true
    }
  ];

  constructor() {
    this.fetch(data => {
      this.rows = data;
    });
  }

  // project table
  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open("GET", `assets/data/projects.json`);
    req.onload = () => {
      cb(JSON.parse(req.response));
    };
    req.send();
  }
}
