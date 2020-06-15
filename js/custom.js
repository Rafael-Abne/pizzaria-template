$('.cart-product').click(function(){
    var procuct =  $(this).parent().find('h4').text();
    swal(procuct+" foi adicionado ao carrinho ", "", "");
});