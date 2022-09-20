// https://www.omnicalculator.com/health/aortic-valve-area

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const aorticvalveareaRadio = document.getElementById('aorticvalveareaRadio');
const LVOTRadio = document.getElementById('LVOTRadio');
const VTI1Radio = document.getElementById('VTI1Radio');
const VTI2Radio = document.getElementById('VTI2Radio');

let aorticvalvearea;
let LVOT = v1;
let VTI1 = v2;
let VTI2 = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

aorticvalveareaRadio.addEventListener('click', function() {
  variable1.textContent = 'LVOT';
  variable2.textContent = 'VTI1';
  variable3.textContent = 'VTI2';
  LVOT = v1;
  VTI1 = v2;
  VTI2 = v3;
  result.textContent = '';
});

LVOTRadio.addEventListener('click', function() {
  variable1.textContent = 'Aortic valve area';
  variable2.textContent = 'VTI1';
  variable3.textContent = 'VTI2';
  aorticvalvearea = v1;
  VTI1 = v2;
  VTI2 = v3;
  result.textContent = '';
});

VTI1Radio.addEventListener('click', function() {
  variable1.textContent = 'Aortic valve area';
  variable2.textContent = 'LVOT';
  variable3.textContent = 'VTI2';
  aorticvalvearea = v1;
  LVOT = v2;
  VTI2 = v3;
  result.textContent = '';
});

VTI2Radio.addEventListener('click', function() {
  variable1.textContent = 'Aortic valve area';
  variable2.textContent = 'LVOT';
  variable3.textContent = 'VTI1';
  aorticvalvearea = v1;
  LVOT = v2;
  VTI1 = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(aorticvalveareaRadio.checked)
    result.textContent = `Aortic valve area = ${computeaorticvalvearea().toFixed(2)}`;

  else if(LVOTRadio.checked)
    result.textContent = `LVOT = ${computeLVOT().toFixed(2)}`;

  else if(VTI1Radio.checked)
    result.textContent = `VTI1 = ${computeVTI1().toFixed(2)}`;

  else if(VTI2Radio.checked)
    result.textContent = `VTI2 = ${computeVTI2().toFixed(2)}`;
})

// calculation

// aorticvalvearea = (LVOT ^ 2 * 0.7854 * VTI1) / VTI2

function computeaorticvalvearea() {
  return ((Math.pow(Number(LVOT.value), 2) * 0.7854 * Number(VTI1.value)) / Number(VTI2.value)) / 100;
}

function computeLVOT() {
  return Math.sqrt(((Number(aorticvalvearea.value) * 100) * Number(VTI2.value)) / (0.7854 * Number(VTI1.value)));
}

function computeVTI1() {
  return ((Number(aorticvalvearea.value) * 100) * Number(VTI2.value)) / (Math.pow(Number(LVOT.value), 2) * 0.7854);
}

function computeVTI2() {
  return (Math.pow(Number(LVOT.value), 2) * 0.7854 * Number(VTI1.value)) / (Number(aorticvalvearea.value) * 100);
}