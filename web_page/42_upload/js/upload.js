/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   upload.js                                          :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: mafortin <mafortin@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/06/09 17:17:01 by mafortin          #+#    #+#             */
/*   Updated: 2022/06/11 18:27:44 by mafortin         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */


<<<<<<< HEAD
const sendHTTPRequest = (method, url, data) => {
	const promise = new Promise((resolve, reject) => {
		const xhr =  new XMLHttpRequest();
		xhr.open(method, url);
		xhr.responseType = "json";
		xhr.onload = () => {
			resolve(xhr.response);
		};
		xhr.send(data);
=======
var ADD = "http://localhost:8000";
const form = document.querySelector("form");
const check = document.querySelector(".uploaded-area");
const body = document.querySelector("body");
const progressArea = document.querySelector(".progress-area");

const	checkFile = () => {
	fetch("http://127.0.0.1:8000/upload.html", {
		method: "GET",
	}).then((result) => { 
		return result.text();
	}).then((content) => {
		console.log(content);
		document.write(content);
>>>>>>> origin/response
	});
}



function showFile(file){
	let progressHTML =  `<li class="row">
										<img class="file" src="assets/icons8-file-64.png">
										<div class="content">
											<div class="details">
												<span class="name">${file.name} • Uploading</span>
												<span class="percent">100%</span>
											</div>
											<div class="progress-bar">
												<div class="progress" style="width:100%"></div>
											</div>
										</div>
											</li>`
	progressArea.innerHTML = progressHTML;
}

const uploadFile = () => {
<<<<<<< HEAD
	let photo = document.getElementById("upload-file").files[0];
	let formData = new FormData();
	formData.append("photo", photo);
	fetch('http://localhost:8000', {method: "POST", body: formData});
=======
	const fileInput = document.querySelector(".file-input");
	let data = new FormData();
	fileInput.click();
	fileInput.onchange = ({target}) =>{
		let file = target.files[0];
		data.append("file", file);
		fetch("http://127.0.0.1:8000/upload", {
			method: "POST",
			body: data
		}).then(response => {
			console.log(response);
			showFile(file);
		}).catch(e => alert(e.message));
	}
	/*fileInput.click();
	fileInput.onchange = ({target}) =>
	{
		let request = new XMLHttpRequest();
		let file = target.files[0];
		if (file){
			request.open('POST', "http://127.0.0.1:8000/upload");
			request.upload.addEventListener("progress", ({loaded, total}) => {
				let fileLoaded = Math.floor(loaded / total ) * 100; // getting the progress %
				let fileTotal = Math.floor(total / 1000); //getting the file size in kb
				console.log("FILE SIZE");
				console.log(fileLoaded, fileTotal);
				let progressHTML =  `<li class="row">
										<img class="file" src="assets/icons8-file-64.png">
										<div class="content">
											<div class="details">
												<span class="name">${file.name} • Uploading</span>
												<span class="percent">${fileLoaded}%</span>
											</div>
											<div class="progress-bar">
												<div class="progress" style="width:${fileLoaded}%"></div>
											</div>
										</div>
											</li>`
			progressArea.innerHTML = progressHTML;
			let uploadedArea = `<li class="row">
									<div class="content">
										<img class="file" src="assets/icons8-file-64.png">
										<div class="content">
											<div class="details">
												<span class="name">image_01.png • Uploading</span>
												<span class="size">70 kb</span>
											</div>
											<img class="checkbox" src="assets/icons8-checked-checkbox-100.png">
									</div>
								</li>`
		uploadedArea.innerHTML = uploadedArea;
			});
			let formData = new FormData(form);
			request.send(formData);
		}
	};*/
>>>>>>> origin/response
};

(function(){
	form.addEventListener("click", uploadFile);
	check.addEventListener("click", checkFile);
})();
