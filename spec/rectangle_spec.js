
describe("Rectangle constructor with set zero", function() {

     it("all zero", function (){
        var rectangle = new Rectangle();
        expect(rectangle.x).toBe(0);
        expect(rectangle.y).toBe(0);
        expect(rectangle.width).toBe(0);
        expect(rectangle.height).toBe(0);
     });

     it("set value", function (){
        var rectangle = new Rectangle(3, 10, 20, 33);
        expect(rectangle.x).toBe(3);
        expect(rectangle.y).toBe(10);
        expect(rectangle.width).toBe(20);
        expect(rectangle.height).toBe(33);
     });
});

describe("Rectangle empty", function() {

     it("check empty", function (){
        var rectangle = new Rectangle();
        expect(rectangle.empty()).toBe(true);
     });

     it("check not empty", function (){
        var rectangle = new Rectangle(10, 10, 100, 100);
        expect(rectangle.empty()).toBe(false);
     });
});

describe("Rectangle set value", function() {

     it("set", function (){
        var rectangle = new Rectangle();
        rectangle.set(15, 15, 200, 100);
        expect(rectangle.x).toBe(15);
        expect(rectangle.y).toBe(15);
        expect(rectangle.width).toBe(200);
        expect(rectangle.height).toBe(100);
     });

     it("corner", function (){
        var rectangle = new Rectangle();
        rectangle.corner(20, 15, 250, 200);
        expect(rectangle.x).toBe(20);
        expect(rectangle.y).toBe(15);
        expect(rectangle.width).toBe(230);
        expect(rectangle.height).toBe(185);
     });

     it("copy", function (){
        var fromRect = new Rectangle();
        fromRect.set(30, 45, 150, 250);
        var rectangle = new Rectangle();
        rectangle.copy(fromRect);
        expect(rectangle.x).toBe(30);
        expect(rectangle.y).toBe(45);
        expect(rectangle.width).toBe(150);
        expect(rectangle.height).toBe(250);
     });

     it("copy not Rectangle", function (){
        var fromRect = [30, 45, 150, 250];
        var rectangle = new Rectangle();
        rectangle.copy(fromRect);
        expect(rectangle.empty()).toBe(true);
     });
});

describe("Rectangle position", function() {

     it("left", function (){
        var rectangle = new Rectangle(15, 15, 200, 100);
        expect(rectangle.left()).toBe(15);
     });

     it("top", function (){
        var rectangle = new Rectangle(10, 10, 100, 100);
        expect(rectangle.top()).toBe(10);
     });

     it("right", function (){
        var rectangle = new Rectangle(10, 10, 150, 150);
        expect(rectangle.right()).toBe(160);
     });

     it("bottom", function (){
        var rectangle = new Rectangle(20, 20, 300, 300);
        expect(rectangle.right()).toBe(320);
     });

     it("center x", function (){
        var rectangle = new Rectangle(5, 5, 153, 153);
        expect(rectangle.centerX()).toBe(81);
     });

     it("center y", function (){
        var rectangle = new Rectangle(4, 7, 150, 153);
        expect(rectangle.centerY()).toBe(83);
     });
});

describe("Rectangle movable scalable", function() {

     it("movable", function (){
        var rectangle = new Rectangle(5, 15, 150, 150);
        var limit = new Rectangle(5, 10, 200, 200);
        expect(rectangle.isMovable(5, 5, limit)).toBe(true);
     });

     it("scalable", function (){
        var rectangle = new Rectangle(150, 150, 100, 100);
        var limit = new Rectangle(50, 20, 260, 260);
        expect(rectangle.isScalable(2.0, 1.5, limit)).toBe(true);
     });
});

describe("Rectangle move scale", function() {

     it("move", function (){
        var rectangle = new Rectangle(5, 15, 150, 150);
        rectangle.move(7, -8);
        expect(rectangle.x).toBe(12);
        expect(rectangle.y).toBe(7);
        expect(rectangle.width).toBe(150);
        expect(rectangle.height).toBe(150);
     });

     it("scale", function (){
        var rectangle = new Rectangle(50, 50, 100, 100);
        rectangle.scale(1.5, 1.2);
        expect(rectangle.x).toBe(25);
        expect(rectangle.y).toBe(40);
        expect(rectangle.width).toBe(150);
        expect(rectangle.height).toBe(120);
     });
});

describe("Rectangle contains include limit", function() {

     it("contains", function (){
        var rectangle = new Rectangle(5, 15, 150, 150);
        expect(rectangle.contains(6, 164)).toBe(true);
     });

     it("not contains", function (){
        var rectangle = new Rectangle(5, 15, 150, 150);
        expect(rectangle.contains(4, 164)).toBe(false);
     });

     it("contains with padding", function (){
        var rectangle = new Rectangle(5, 15, 150, 150);
        expect(rectangle.containsWithPadding(4, 164, 10)).toBe(true);
     });

     it("include", function (){
        var r1 = new Rectangle(10, 10, 200, 50);
        var r2 = new Rectangle(11, 11, 198, 48);
        expect(r1.include(r2)).toBe(true);
     });

     it("not include", function (){
        var r1 = new Rectangle(10, 10, 200, 50);
        expect(r1.include(null)).toBe(false);

        var r2 = new Rectangle(11, 11, 199, 49);
        expect(r1.include(r2)).toBe(false);
     });

     it("limit", function (){
        var rectangle = new Rectangle(5, 15, 150, 150);
        var rectLimit = new Rectangle(30, 30, 10, 10);
        rectangle.limit(rectLimit);
        expect(rectangle.x).toBe(30);
        expect(rectangle.y).toBe(30);
        expect(rectangle.width).toBe(10);
        expect(rectangle.height).toBe(10);
     });
});

describe("Rectangle utility", function() {

     it("check swap", function (){
        var rectangle = new Rectangle(5, 15, 100, 150);
        rectangle.swap();
        expect(rectangle.width).toBe(150);
        expect(rectangle.height).toBe(100);
     });
});
