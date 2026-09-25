/* ELUCENIA standalone integration. Source package metadata and rights: README.md. */
(function(root){'use strict';
function freeze(value){if(value&&typeof value==='object'){for(const item of Object.values(value))freeze(item);Object.freeze(value);}return value;}
const TOOL=freeze({"id":"formula-de-parkland","title":"Fórmula de Parkland","fields":[["peso","Peso","num",{"min":2,"max":250,"step":0.1,"unit":"kg","ph":"70"}],["scq","Superfície corporal queimada (2º e 3º graus)","num",{"min":1,"max":100,"step":0.5,"unit":"%","ph":"30"}],["ml","Volume por kg por % de SCQ","radio",{"opts":{"2":"2 mL (Brooke modificada)","3":"3 mL (criança)","4":"4 mL (Parkland)"}}],["horas","Horas desde a queimadura","num",{"min":0,"max":24,"step":0.5,"unit":"h","ph":"2","opt":true}]],"config":null,"reviewStatus":"restricted","clinicalValidation":"not-performed"});
function calculate(){return {error:'Cálculo suspenso: consulte a revisão e a fonte oficial.',code:'REVIEW_REQUIRED',id:TOOL.id};}
const api=Object.freeze({metadata:TOOL,calculate});if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.EluceniaTool=api;
})(typeof globalThis!=='undefined'?globalThis:this);
