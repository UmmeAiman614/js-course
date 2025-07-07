## Projects related to DOM

## Project link
[click here](https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbl9aVGc1Wl80U3hCeXVLUmNRZU1YR2l2QVBwQXxBQ3Jtc0ttY0FrcGE2UDFJQWNMWEw0UXltLU95cFBVMXEtTlRsLTVJdUVFNE52eWJwRG1HcDQ5N1BfRER3UlRkaXdpX2xXMjhKS3d6MFQwczhvd3lUUVM0b0g2UlFDVDVqbkJWR2J2eE9mY2EzUE9nRGpSMHY4MA&q=https%3A%2F%2Fgithub.com%2Fhiteshchoudhary%2F&v=EGqHVjU-fas)

## Solution Code
## Project One

```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    // console.log(e);
    // console.log(e.target);
    if (e.target.id == 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id == 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id == 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id == 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
  });
});

```



