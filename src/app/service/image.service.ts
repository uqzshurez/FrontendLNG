import { Injectable } from '@angular/core';
import { Storage, ref, uploadBytes, list, getDownloadURL, UploadResult, StorageReference} from '@angular/fire/storage'



@Injectable({
  providedIn: 'root'
})
export class ImageService {
  url: string = "";

  constructor(private storage: Storage) {}

  public uploadImage($event: any, name: string) {
    const file = $event.target.files[0]
    const imgRef = ref(this.storage, `imagen/` + name)
    uploadBytes(imgRef, file)
      .then((response: UploadResult) => {
        this.getImages();
      })
      .catch((error: any) => {
        console.log(error);
      });
  }

  public async getDownloadURL(name: string): Promise<string> {
    const imgRef: StorageReference = ref(this.storage, `imagen/${name}`);
    const url: string = await getDownloadURL(imgRef);
    return url;
  }

  public getImages() {
    const imagesRef = ref(this.storage, 'imagen')
    list(imagesRef)
      .then(async (response: any) =>{
        for(let item of response.items){
          this.url = await this.getDownloadURL(item.name);
          console.log("La URL es: "+ this.url)
        }
      })
      .catch((error: any) => {
        console.log(error);
      });
  }
}
