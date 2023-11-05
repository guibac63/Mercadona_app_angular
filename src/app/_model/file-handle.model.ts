import { SafeUrl } from "@angular/platform-browser";

export interface FileHandle {
  file: File,
  url: SafeUrl,
  image_url:string
}