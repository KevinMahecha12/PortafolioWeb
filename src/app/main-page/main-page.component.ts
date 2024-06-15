import { Component, OnInit, HostListener} from '@angular/core';
import { Firestore, doc, getDoc } from '@angular/fire/firestore';

const PATH = 'DatosGenerales';
const SOBRE_MI_DOC_ID = 'sobremi';
const EXPERIENCIA_DOC_ID = 'experiencia'; // Document ID
const CV_DOC_ID = 'cv';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  menuActivo = false;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const headerInicio = document.getElementById('headerInicio');
    const headerDespuesScroll = document.getElementById('headerDespuesScroll');
    if (window.pageYOffset > 0) {
      headerInicio?.classList.remove('active');
      headerDespuesScroll?.classList.add('active');
   
    } else {
      headerInicio?.classList.add('active');
      headerDespuesScroll?.classList.remove('active');
    }
  }

  sobreMiTexto: string | undefined;
  experiencias: any[] = []; // Array para almacenar las experiencias
  cv: string | undefined;

  constructor(private firestore: Firestore) {}

  ngOnInit(): void {
    this.obtenerTextoSobreMi();
    this.obtenerExperiencias();
    this.obtenerCVUrl();
  }
  obtenerCVUrl(): void {
    const docRef = doc(this.firestore, `${PATH}/${CV_DOC_ID}`);
    getDoc(docRef).then(snapshot => {
      if (snapshot.exists()) {
        const data = snapshot.data();
        this.cv = data?.['url'];
      } else {
        console.log('No se encontró el documento "cv" en la colección "DatosGenerales".');
      }
    }).catch(error => {
      console.error('Error al obtener la url de el cv:', error);
    });
  }
  obtenerTextoSobreMi(): void {
    const docRef = doc(this.firestore, `${PATH}/${SOBRE_MI_DOC_ID}`);
    getDoc(docRef).then(snapshot => {
      if (snapshot.exists()) {
        const data = snapshot.data();
        this.sobreMiTexto = data?.['texto_sobremi'];
      } else {
        console.log('No se encontró el documento "sobremi" en la colección "DatosGenerales".');
      }
    }).catch(error => {
      console.error('Error al obtener el texto de sobremi:', error);
    });
  }

  obtenerExperiencias(): void {
    const docRef = doc(this.firestore, `${PATH}/${EXPERIENCIA_DOC_ID}`);
    getDoc(docRef).then(snapshot => {
      if (snapshot.exists()) {
        const data = snapshot.data();
        if (data) {
          this.experiencias = Object.keys(data['Experiencia']).map(key => data['Experiencia'][key]);
        } else {
          console.log('El campo "Experiencia" no está definido en el documento.');
        }
      } else {
        console.log('No se encontró el documento "experiencia" en la colección "DatosGenerales".');
      }
    }).catch(error => {
      console.error('Error al obtener las experiencias:', error);
    });
  }

  public desplegarmenu(): void {
    this.menuActivo = !this.menuActivo;
    console.log("Se presionó el botón");
  }
}
