const utils  = require('../utills/utill');
const expect = require('expect') ;



describe('Math',()=>{
    describe('Adding', ()=>{
        it('Shoul add two numbers' , ()=>{
            let sum = utils.add(5 ,6 );
                expect(sum).toBe(11); 
        });
    });
    describe('Adding Async', ()=>{
        it('Shoul Async add two numbers' , (done)=>{
            utils.addAsync(5 ,6 ,(sum)=>{
                expect(sum).toBe(11); 
                done();
            });    
        });
    });
    describe('subAsync Async', ()=>{
        it('Shoul Async subAsync two numbers' , (done)=>{
            utils.subAsync(10 ,6 ,(sum)=>{
                expect(sum).toBe(4); 
                done();
            });    
        });
    });
    describe('Subtractin', ()=>{
        it('Shoul Subtract two numbers' , ()=>{
            let res = utils.sub(10 ,6);
           expect(res).toBe(4);
        });
    });

   
});


