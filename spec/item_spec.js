describe("Item", function() {
  var item;

  beforeEach(function() {
    gildedRose = new Shop([ new Item("foo", 10, 10)]);
  });

  describe("Item Information", function() {
    it("creates an item with the correct name", function() {
      expect(gildedRose.items[0].name).toEqual("foo");
    });

    it("creates an item with the correct sellIn value", function() {
      expect(gildedRose.items[0].sellIn).toEqual(10);
    });

    it("creates an item with the correct quality value", function() {
      expect(gildedRose.items[0].quality).toEqual(10);
    });
  });
});
