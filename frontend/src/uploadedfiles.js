import React, { useEffect, useState } from 'react';


const DisplayUploadedFiles = ({ images, onDeleteImage }) => {
  console.log('Props:', images);
  if (!images || images.length === 0) {
    return <p>No images uploaded.</p>;
  }
   /* const [pdfFiles, setPdfFiles] = useState([]);
    const [imageFiles, setImageFiles] = useState([]);
    const [upimg, setUpimg] = useState('');

  useEffect(() => {
    const keys = Object.keys(localStorage);
    const files = keys.filter((key) => !key.startsWith('@')).map((key) => ({
      name: key,
      content: localStorage.getItem(key),
    }));
    const pdfs = files.filter((file) => file.name.toLowerCase().endsWith('.pdf'));
    const images = files.filter(
      (file) =>
        file.name.toLowerCase().endsWith('.png') ||
        file.name.toLowerCase().endsWith('.jpg') ||
        file.name.toLowerCase().endsWith('.jpeg')
    );
    setPdfFiles(pdfs);
    setImageFiles(images);
  }, []);*/

 /* const imagein=document.querySelector('#imageinput');
  var upimg="";

  imagein.addEventListener('fullscreenchange',function(){
    console.log(imagein.value);
    const reader= new FileReader();
    reader.addEventListener("load",()=>{
      upimg=reader.result;
      document.querySelector('#displayimage').style.backgroundImage=`url(${upimg})`; 
    });
    reader.readAsDataURL(this.files[0]);
  })*/
  /*const handleImageChange = (event) => {
    const reader = new FileReader();
    reader.onload = () => {
      setUpimg(reader.result);
    };
    reader.readAsDataURL(event.target.files[0]);
  };*/

  return (
    <div>
    {images.map((img, index) => (
        <div key={index}>
          <img src={img} alt={`Uploaded ${index}`} style={{ maxWidth: '50%', height: '250px' }} />
          {/*<button onClick={() => onDeleteImage(index)}>Delete</button>*/}
        </div>
      ))}
    </div>
  );


};

export default DisplayUploadedFiles;