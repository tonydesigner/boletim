$(function(){
    const alunos =
    [
        {name: 'João', idade: 7, turma: 201, serie:'2º Série'},
        {name: 'Maria', idade: 6, turma: 101, serie:'1º Série'}
    ]

    alunos.map((i)=>{
        $('form input').change(()=>{
                $('form').hide()
                $('.mostra').show()
                $('.notas').show()
                
           if($('input').val() == i.name){
            $('.mostra').html(`
                    <div class="caixa brd">
                       <table>
                            <tr><td>Nome:</td><td>${i.name}</td></tr>
                            <tr><td>Idade:</td><td>${i.idade} anos </td></tr>
                            <tr><td>Turma:</td><td>${i.turma}</td></tr>
                            <tr><td>Série:</td><td>${i.serie}</td></tr>
                       </table>
                    </div>
                `)
                const materias =
                [
                    {materia: 'Matemática'},
                    {materia: 'Português'},
                    {materia: 'Ed. Física'},
                    {materia: 'Ciências Sociais'},
                ]
                materias.map((i)=>{
                    $('.notas select').append(`
                        <option>${i.materia}</option>
                    `)
                    let numUm = $('.um')
                    let numDois = $('.dois')
                    let numTres = $('.tres')
                    let numQuatro = $('.quatro')
                    
                    $('.quatro').change(()=>{
                        let result = parseInt(numUm.val()) + parseInt(numDois.val()) + parseInt(numTres.val()) + parseInt(numQuatro.val()) 
                        let final = result/4
                        if(final >= 7){
                            $('.media').html(`
                            <h2 style="color:green;">  Média: ${final}, Você esta Aprovado </h2>
                            `)
                        }else{
                            $('.media').html(`
                            <h2 style="color:red;"> Média: ${final}, Você esta Reprovado  </h2>
                            `)            
                        }
                        
                   
                
                    })
                })
           }
          
        })
    })
  
    
   
    
})