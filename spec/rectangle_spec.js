
describe("Rectangle constructor with set zero", function() {

     it("all zero", function (){
        var rectangle = new Rectangle();
        expect(rectangle.x).toBe(0);
        expect(rectangle.y).toBe(0);
        expect(rectangle.width).toBe(0);
        expect(rectangle.height).toBe(0);
     });
});
