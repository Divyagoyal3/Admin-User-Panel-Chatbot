import * as Plotly from 'plotly.js-dist-min';
import { AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  Output,
  ViewChild } from '@angular/core';
import { MatDateRangePicker, MatDatepickerInputEvent, MatDatepickerModule } from '@angular/material/datepicker';
import { DropdownService } from 'src/app/services/dropdown.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ProjectsTimeSheetEntry } from '../../interfaces/dashboard';
import { SharedService } from 'src/app/services/shared.service';


@Component({
  selector: 'app-rtime-circular-chart',
  templateUrl: './rtime-circular-chart.component.html',
  styleUrls: [ './rtime-circular-chart.component.scss' ],
})
// export class RtimeCircularChartComponent implements AfterViewInit {
export class RtimeCircularChartComponent implements OnChanges {
  showCalendar = true;
  showCountryDropdown = false;
  selectedCountry = { name: '', dial_code: '' };
  searchText = '';
  countries: any = [];
  searchedCountries: any = [];
  @Input() backgroundColorArray = [];
  @Input() id = '';
  @Input() showCountryIcon = false;
  @Input() showCalendarIcon = true;

  /**
   * Property to handle chnage event on input
   */
  @Output() startDateChange = new EventEmitter<any>();
  @Output() endDateChange = new EventEmitter<any>();
  @Input() title = 'Projects';
  @Input() labelContainer = [
    { color: '#4DAAE2', title: 'RTime', value: 30 },
    { color: '#287865', title: 'Zoho', value: 70 },
    { color: '#0C4ff5', title: 'Kardi', value: 45 },

  ];
  @Input() pieChartData: ProjectsTimeSheetEntry[] = [];

  @Input() chartData!: {
    datasets: [{
      data: [1891, 500],
      backgroundColor: [
        '#357BC3',
        '#282828',
      ],
      hole: .4,
    }],
  };
  @Input() chartOptions!: {
    aspectRatio: 1.5,
    cutout: 70,
  };

  layout = {
    height: 228,
    width: 228,
    textinfo: 'none',
    textposition: 'none',
    plot_bgcolor: 'rgba(0, 0, 0, 0)',
    paper_bgcolor: 'rgba(0, 0, 0, 0)',
    showlegend: false,
    reponsive: true,
    hoverinfo: 'label percent',
    margin: {
      l: 0,
      r: 0,
      t: 0,
      b: 0,
    },
  };

  colors = [ '#357BC3', '#0C4335', '#282828', '#975399', '#q844d5', '#q3q436', '#q3q4d2' ];

  ngOnChanges () {
    console.log('hi', this.pieChartData);

    this.labelContainer = [];
    let i = 0;
    for(const data of this.pieChartData) {
      this.labelContainer.push({ title: data.projectName, value: data.totalHours, color: this.colors[i] });
      i++;
    }

    this.renderGraph();

  }

  @ViewChild('plotlyContainer') plotlyContainer: ElementRef | undefined;
  // @ViewChild('picker') picker: MatDateRangePicker<any>;
  graphId = 'graph';

  @HostListener('document:click', [ '$event' ]) onDocumentClick (event: any) {
    this.showCountryDropdown = false;
  }

  activeDropDown = '';
  constructor (
    private sharedService: SharedService,
    private dropdownService: DropdownService,
  ) {
    this.getCountries();
    this.dropdownService.openDropdown.subscribe((id) => {
      this.activeDropDown = id;
      if (this.activeDropDown === this.id) {
        this.showCountryDropdown = true;
      } else {
        this.showCountryDropdown = false;
      }
    });
  }

  // ngAfterViewInit () {
  //   this.renderGraph();
  // }

  getCountries () {
    // this.sharedService.getAllCountries()
    //   .then((countries) => {
    //     this.countries = countries;
    //     this.searchedCountries = countries;
    //   })
    //   .catch((error) => {
    //     console.error('Error getting static text:', error);
    //   });
  }

  onCountrySelect (country: any) {
    this.selectedCountry = country;
    this.countries = this.countries.filter((c: any) => c !== country);
    this.countries.sort((a: any, b: any) => a.name.localeCompare(b.name));
    this.countries = [ country, ...this.countries ];
    this.showCountryDropdown = !this.showCountryDropdown;
  }

  calendarClick () {
    this.dropdownService.openDropdown.next('');
    // this.picker.open();
  }

  public searchEvent () {
    this.countries = this.searchedCountries;
    this.countries = this.searchedCountries.filter((country: any) => (country.name || '').match(new RegExp(this.searchText, 'gi')));
  }

  renderGraph () {
    const graphDiv: any = document.getElementById(`${ this.graphId }`);
    const config = {
      displayModeBar: false,
    };
    Plotly.newPlot(graphDiv, [ {
      // values: [ 11, 26, 55 ],
      values: this.pieChartData.map((proj) => proj.totalHours),
      // labels: [ 'RTime', 'Zoho', 'Kardi' ],
      labels: this.pieChartData.map((proj) => proj.projectName),
      type: 'pie',
      hole: .7,
      // hoverinfo: 'none',
      textinfo: 'none',
      marker: {
        // colors: [ '#357BC3', '#0C4335', '#282828', '#999999' ],
        colors: this.pieChartData.map((proj, i) => this.colors[i]),
      },
    } ], this.layout, config);
  }

  onStartDateChange (event: MatDatepickerInputEvent<Date>) {
    this.startDateChange.emit(event.value);
  }
  onEndDateChange (event: MatDatepickerInputEvent<Date>) {
    this.endDateChange.emit(event.value);
  }

  onDropdownClick (event: any) {
    event.stopPropagation();
    if (this.showCountryDropdown) {
      this.dropdownService.openDropdown.next('');
    } else {
      this.dropdownService.openDropdown.next(this.id);
    }
  }
}

