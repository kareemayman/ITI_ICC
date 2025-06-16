// const {MathUtils,obj,sayHelloWorld,doSomeThingLater} = require("../index.js");

// //* Task Test world() method 


// xdescribe("test MathUitls", ()=>{
//     let math ;
//     beforeEach(()=>{
//         math =new MathUtils();
//     })

//     //! simple run

//     xit("test sum",()=>{
//          expect(math.sum(1,1)).toEqual(2);
//          expect(math.sum(1,1)).toBe(2);
//         expect(math.sum(1,1)).toEqual(jasmine.any(Number));
//     })
// //! ToBe() , ToEqual()

// xit("",()=>{
//     let user={id:1};
//     let a ={x:user};
//     let b= {x:user};
//     expect(a).toEqual(b);
//     // expect(a).toBe(b);

// })
// })

// //! Custom matcher
// xdescribe("create custom matcher",()=>{
//     beforeEach(()=>{
//         jasmine.addMatchers({
//             toBeGreaterThan100:function(){
//                 return{
//                     compare:function(actual){
//                         let res={};
//                         res.pass=actual>100;
//                         res.message="Enter number >100";
//                         return res;
//                     }
//                 }
//             }
//         })
//     })
//     it("",()=>{
//         expect(120).toBeGreaterThan100();
//     })
// })

// //! Spy On 
// xdescribe("Spyon", ()=>{
//     beforeAll(()=>{
//         spyOn(obj,"hello");
//         sayHelloWorld(obj);
//     })
//     it("",()=>{
//         expect(obj.hello).toHaveBeenCalled();
//         expect(obj.hello).toHaveBeenCalledTimes(1);
//          expect(obj.hello).toHaveBeenCalledWith(3);
//     }) 
// })

// //! handle settimeout via clock , tick

// xdescribe("study clock", ()=>{
//     beforeAll(()=>{
//         jasmine.clock().install();
//     })
//       afterAll(()=>{
//         jasmine.clock().uninstall();
//     })
//     it("",()=>{
//         var x=5;
//         setTimeout(()=>{
//             x=10;
//         },1000)
//         expect(x).toEqual(5);
//         jasmine.clock().tick(1000);
//         expect(x).toEqual(10);
        

//     })
    
// })

// //! spy funciton with unkown implementation
// describe("test mocking",()=>{
//     beforeAll(()=>{
//         jasmine.clock().install();
//     })
//     afterAll(()=>{
//         jasmine.clock().uninstall();
//     })

//     it("test mocking data",()=>{
//            let callback= jasmine.createSpy("callback");
//            doSomeThingLater(callback);
//            jasmine.clock().tick(1000);
//            expect(callback).toHaveBeenCalled();
//            expect(callback).toHaveBeenCalledWith(12345);

//     })
// })


