import {Component, ElementRef, AfterViewInit,ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {AlertService, UserService} from '../_services/index';


@Component({
    moduleId: module.id,
    templateUrl: 'register.component.html',
    styles: [`
        .table tr.active  {
                border: 2px solid blue !important;
        }
  `],
})


export class RegisterComponent implements  AfterViewInit{
    model: any = {};
    loading = false;
    url= '';
    src = '';
    languages=['hebrew', 'english', 'france'];
    selectedRow = 200;
    iframeVideo = "https://www.youtube.com/embed/YzE0w6-aPM4?start=3568&end=3598";

    clips = [
        {
            name : "Captain Rex fights to pass",
            start: '59:28',
            length : '00:30',
            firstFrame: "app/assets/1-startFrame-fight.jpeg",
            lastFrame: "app/assets/1-endFrame-fight.jpeg",
            iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/YzE0w6-aPM4?start=3568&end=3598" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>',
            previewFrame: "./app/assets/1-previewFrame-fight.jpeg",
            popularity: 7035,
        },
        {
            name : "Modern sperm magasine",
            start: '01:31',
            length : '00:15',
            firstFrame: "app/assets/2-startFrame-modern.jpeg",
            lastFrame: "app/assets/2-endFrame-modern.jpeg",
            iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/YzE0w6-aPM4?start=91&end=106" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>',
            previewFrame: "app/assets/2-previewFrame-modern.jpeg",
            popularity: 256,
        }
    ];
    ngAfterViewInit() {
        // viewChild is set after the view has been initialized
        this.setClickedRow(0)
    }
    // @ViewChild('dataContainer') dataContainer: ElementRef;
    @ViewChild('dataContainer') dataContainer: ElementRef;
    loadData(data: string) {
        this.dataContainer.nativeElement.innerHTML = data;
    }
    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService) {

        ;
    }


    setClickedRow = function(index : number){
        this.selectedRow = index;
        this.model.firstName = this.clips[index].name;
        this.model.lastName = this.clips[index].start;
        this.model.userName  = this.clips[index].length;
        this.model.password  = 'hebrew';
        this.model.iframeVideo = this.clips[index].iframe;
        this.iframeVideo = this.clips[index].iframe;
        this.loadData(this.iframeVideo);
    }

    register() {
        this.loading = true;
        this.src = this.model.firstName;
        if (this.model.lastName) {
            this.src = this.src + '?start=' + this.model.lastName;
        }
        if (this.model.userName) {
            this.src = this.src + '&duration=' + this.model.userName;
        }
        this.url = '<iframe width="560" height="315" src=' + this.src + ' frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>';
        alert(this.url);
    }
}
