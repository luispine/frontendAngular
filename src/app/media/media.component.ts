import { Component, OnInit } from '@angular/core';
import { MediaService } from '../services/media.service';


@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})

export class MediaComponent implements OnInit {
    
    constructor(private mediaService: MediaService) { }

    sizes: number[] = [];
    hours: number[] = [];
    
    ngOnInit(): void {
        this.mediaService.getProxySize().subscribe((data)=>{
            console.log(data);
            alert(data);

            this.sizes = data.size;
        })

        this.mediaService.getDevHours().subscribe((data)=>{
            console.log(data);
            alert(data);

            this.hours = data.hours;
        });
    }

    media(lista: number[]): number {
        const num = lista.length;
        let sum = 0;
        let media = 0;

        for(let i = 0; i < num; i++) {
            const value = Number(lista[i]);
            if (!isNaN(value)) {
            sum += value;
            }
        }

        media = sum / num;
        media = Number(media.toFixed(2));
        
        console.log(media);

        return media;
    }
}