currency={
AUD:43.7232,
AZN:33.0407,
AMD:0.118769,
BYN:30.5532,
BGN:31.6599,
BRL:18.2881,
HUF:0.200184,
KRW:0.0511474,
DKK:8.32689,
USD:57.4247,
EUR:61.8636,
INR:0.877349,
KZT:0.181334,
CAD:42.9858,
KGS:0.828556,
CNY:8.33704,
MDL:2.94033,
TMT:16.4329,
NOK:6.75640,
PLN:14.5166,
RON:13.5920,
XDR:78.2256,
SGD:41.0001,
TJS:7.03346,
TRY:15.8282,
UZS:0.0161669,
UAH:2.11704,
GBP:71.6947,
CZK:2.29176,
SEK:6.50270,
CHF:57.8295,
ZAR:4.59626,
JPY:0.516015
};

//27.03.2017

function money(val,cur)
{
	if (arguments.length==3) return val+" "+cur+" ("+(Math.round(currency[cur]*val/currency[arguments[2]]*100)/100)+" "+arguments[2]+")";
	return val+" "+cur+" ("+Math.round(currency[cur]*val)+" руб)";
}

Number.prototype.AUD=function(){if (arguments.length==1) return Math.round(this*currency.AUD/currency[arguments[0]]*100)/100; else return this*currency.AUD};
Number.prototype.AZN=function(){if (arguments.length==1) return Math.round(this*currency.AZN/currency[arguments[0]]*100)/100; else return this*currency.AZN};
Number.prototype.AMD=function(){if (arguments.length==1) return Math.round(this*currency.AMD/currency[arguments[0]]*100)/100; else return this*currency.AMD};
Number.prototype.BYN=function(){if (arguments.length==1) return Math.round(this*currency.BYN/currency[arguments[0]]*100)/100; else return this*currency.BYN};
Number.prototype.BGN=function(){if (arguments.length==1) return Math.round(this*currency.BGN/currency[arguments[0]]*100)/100; else return this*currency.BGN};
Number.prototype.BRL=function(){if (arguments.length==1) return Math.round(this*currency.BRL/currency[arguments[0]]*100)/100; else return this*currency.BRL};
Number.prototype.HUF=function(){if (arguments.length==1) return Math.round(this*currency.HUF/currency[arguments[0]]*100)/100; else return this*currency.HUF};
Number.prototype.KRW=function(){if (arguments.length==1) return Math.round(this*currency.KRW/currency[arguments[0]]*100)/100; else return this*currency.KRW};
Number.prototype.DKK=function(){if (arguments.length==1) return Math.round(this*currency.DKK/currency[arguments[0]]*100)/100; else return this*currency.DKK};
Number.prototype.USD=function(){if (arguments.length==1) return Math.round(this*currency.USD/currency[arguments[0]]*100)/100; else return this*currency.USD};
Number.prototype.EUR=function(){if (arguments.length==1) return Math.round(this*currency.EUR/currency[arguments[0]]*100)/100; else return this*currency.EUR};
Number.prototype.INR=function(){if (arguments.length==1) return Math.round(this*currency.INR/currency[arguments[0]]*100)/100; else return this*currency.INR};
Number.prototype.KZT=function(){if (arguments.length==1) return Math.round(this*currency.KZT/currency[arguments[0]]*100)/100; else return this*currency.KZT};
Number.prototype.CAD=function(){if (arguments.length==1) return Math.round(this*currency.CAD/currency[arguments[0]]*100)/100; else return this*currency.CAD};
Number.prototype.KGS=function(){if (arguments.length==1) return Math.round(this*currency.KGS/currency[arguments[0]]*100)/100; else return this*currency.KGS};
Number.prototype.CNY=function(){if (arguments.length==1) return Math.round(this*currency.CNY/currency[arguments[0]]*100)/100; else return this*currency.CNY};
Number.prototype.MDL=function(){if (arguments.length==1) return Math.round(this*currency.MDL/currency[arguments[0]]*100)/100; else return this*currency.MDL};
Number.prototype.TMT=function(){if (arguments.length==1) return Math.round(this*currency.TMT/currency[arguments[0]]*100)/100; else return this*currency.TMT};
Number.prototype.NOK=function(){if (arguments.length==1) return Math.round(this*currency.NOK/currency[arguments[0]]*100)/100; else return this*currency.NOK};
Number.prototype.PLN=function(){if (arguments.length==1) return Math.round(this*currency.PLN/currency[arguments[0]]*100)/100; else return this*currency.PLN};
Number.prototype.RON=function(){if (arguments.length==1) return Math.round(this*currency.RON/currency[arguments[0]]*100)/100; else return this*currency.RON};
Number.prototype.XDR=function(){if (arguments.length==1) return Math.round(this*currency.XDR/currency[arguments[0]]*100)/100; else return this*currency.XDR};
Number.prototype.SGD=function(){if (arguments.length==1) return Math.round(this*currency.SGD/currency[arguments[0]]*100)/100; else return this*currency.SGD};
Number.prototype.TJS=function(){if (arguments.length==1) return Math.round(this*currency.TJS/currency[arguments[0]]*100)/100; else return this*currency.TJS};
Number.prototype.TRY=function(){if (arguments.length==1) return Math.round(this*currency.TRY/currency[arguments[0]]*100)/100; else return this*currency.TRY};
Number.prototype.UZS=function(){if (arguments.length==1) return Math.round(this*currency.UZS/currency[arguments[0]]*100)/100; else return this*currency.UZS};
Number.prototype.UAH=function(){if (arguments.length==1) return Math.round(this*currency.UAH/currency[arguments[0]]*100)/100; else return this*currency.UAH};
Number.prototype.GBP=function(){if (arguments.length==1) return Math.round(this*currency.GBP/currency[arguments[0]]*100)/100; else return this*currency.GBP};
Number.prototype.CZK=function(){if (arguments.length==1) return Math.round(this*currency.CZK/currency[arguments[0]]*100)/100; else return this*currency.CZK};
Number.prototype.SEK=function(){if (arguments.length==1) return Math.round(this*currency.SEK/currency[arguments[0]]*100)/100; else return this*currency.SEK};
Number.prototype.CHF=function(){if (arguments.length==1) return Math.round(this*currency.CHF/currency[arguments[0]]*100)/100; else return this*currency.CHF};
Number.prototype.ZAR=function(){if (arguments.length==1) return Math.round(this*currency.ZAR/currency[arguments[0]]*100)/100; else return this*currency.ZAR};
Number.prototype.JPY=function(){if (arguments.length==1) return Math.round(this*currency.JPY/currency[arguments[0]]*100)/100; else return this*currency.JPY};

AUD='AUD'; AZN='AZN'; AMD='AMD'; BYN='BYN'; BGN='BGN'; BRL='BRL'; HUF='HUF'; KRW='KRW'; DKK='DKK'; USD='USD'; EUR='EUR'; INR='INR'; KZT='KZT'; CAD='CAD'; KGS='KGS'; CNY='CNY'; MDL='MDL'; TMT='TMT'; NOK='NOK'; PLN='PLN'; RON='RON'; XDR='XDR'; SGD='SGD'; TJS='TJS'; TRY='TRY'; UZS='UZS'; UAH='UAH'; GBP='GBP'; CZK='CZK'; SEK='SEK'; CHF='CHF'; ZAR='ZAR'; JPY='JPY';
