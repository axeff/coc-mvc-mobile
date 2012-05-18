
Vehicel = function(typ) {
	switch (typ){
		case "Flugzeug":
			this.fortbewegungsart = "fliegt";
		break;
		default:
			this.fortbewegungsart = "fährt";
		break;
	}
}

Auto = function (fabrikat, marke, typ) {

	Vehicel.call(this, typ);

	
    this.fabrikat = fabrikat;
	this.marke = marke;
	
	this.setSitze = function(anzahl){
		this.sitze = anzahl;
		return this;
	}

	this.getSitze = function(){
		return this.sitze;
	}

	this.getDescription = function(){
		
		return "Auto: "+this.fabrikat+" "+this.marke+" hat "+this.getSitze()+" Sitze und es "+this.fortbewegungsart;
		
	}

}


Lkw = function(){
	Auto.apply(this, arguments);

	this.setLadeflaeche = function(hasLadeflaeche){
		this.ladeflaeche = hasLadeflaeche;
		return this;
	}

	this.hasLadeflaeche = function (){
		return this.ladeflaeche ? "Ja" : "Nein";
	}

	this.getDescription = function(){
		return "Auto: "+this.fabrikat+" "+this.marke+" hat "+this.getSitze()+" Sitze und es "+this.fortbewegungsart+". Und ne Ladefläche? "+this.hasLadeflaeche();
	}
}


