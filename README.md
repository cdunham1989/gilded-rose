# Gilded Rose Tech Test

This is a well known kata developed by Terry Hughes. It was given to us as part of the Tech Test week at Makers Academy

Here is the text of the kata:

*"Hi and welcome to team Gilded Rose. As you know, we are a small inn with a prime location in a prominent city run by a friendly innkeeper named Allison. We also buy and sell only the finest goods. Unfortunately, our goods are constantly degrading in quality as they approach their sell by date. We have a system in place that updates our inventory for us. It was developed by a no-nonsense type named Leeroy, who has moved on to new adventures. Your task is to add the new feature to our system so that we can begin selling a new category of items. First an introduction to our system:

All items have a SellIn value which denotes the number of days we have to sell the item. All items have a Quality value which denotes how valuable the item is. At the end of each day our system lowers both values for every item. Pretty simple, right? Well this is where it gets interesting:

Once the sell by date has passed, Quality degrades twice as fast
The Quality of an item is never negative
“Aged Brie” actually increases in Quality the older it gets
The Quality of an item is never more than 50
“Sulfuras”, being a legendary item, never has to be sold or decreases in Quality
“Backstage passes”, like aged brie, increases in Quality as it’s SellIn value approaches; Quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but Quality drops to 0 after the concert
We have recently signed a supplier of conjured items. This requires an update to our system:

“Conjured” items degrade in Quality twice as fast as normal items
Feel free to make any changes to the UpdateQuality method and add any new code as long as everything still works correctly. However, do not alter the Item class or Items property as those belong to the goblin in the corner who will insta-rage and one-shot you as he doesn’t believe in shared code ownership (you can make the UpdateQuality method and Items property static if you like, we’ll cover for you)."*

## The Brief

Practice good design, refactor the code in such a way that adding the new "conjured" item functionality is easy.

## Thought Process

My initial process was to look at the code and figure out what all of it was doing, which bits I could alter and which bits I should leave the same. To see how it was all working I altered the number of days the shop had been open within the TexttestFixture.html file. This gave me a bigger picture of what was happening with values of items within the shop.

For my next step I set out to look at the first failing test and make this pass. Once I had done this I decided to write as many tests as possible to cover as many different avenues through the system an item could have.

## Running the app locally

* Clone the repository.
* In the terminal type `Open SpecRunner.html` to run the tests.
* Then type `Open TexttestFixture.html` to see a print out of the code functionality.
