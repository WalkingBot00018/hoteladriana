var contenedor=('#caja');

var siguiente = ('btn-adelante');
var anterior = ('btn-atras');


$('#caja .section_caja:last').insertBefore('#caja .section_caja:first');

contenedor.css('margin-left','-',+ 100 + '%');


function derecha(){
    contenedor.animate({
        marginleft:'-'+200+'%'
    },700,function(){
        $('#caja .section_caja:first').insertAfter('#caja .section_caja:last')
        contenedor.css('marginleft', '-'+100+'%');

    });

};

function isquierda(){
    contenedor.animate({
        marginleft:0
    }, 700, function(){
        $('#caja .section_caja:last').insertBefore('#caja .section_caja:first')
        contenedor.css('margin-left','-'+100+'%');
    });
};

function automatico(){
    interval = setInterval(function(){
        derecha();
    },5000);

};



siguiente.on('click', function(){
    derecha();
    clearInterval(interval);
    automatico();
});


anterior.on('click', function(){
    isquierda();
    clearInterval(interval);
    automatico();
});

automatico();
