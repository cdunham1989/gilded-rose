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

For my next step I set out to look at the first failing test and make this pass. Once I had done this I decided to write as many tests as possible to cover as many different avenues through the system an item could have. Once I had finished writing as many tests as I could for the overall functionality I broke out into a separate Item spec. This was to ensure the constructor worked as planned for now but also to ensure that none of the refactoring or extra functionality I add in will cause this to break.

I originally included two pending tests in my code to handle the two issues I found (see below). In the end I decided to leave the functionality as is and to test how it works now so as not to alter the functionality through refactoring.

Now I have finished testing the systems functionality I will begin to refactor the code. I started by commenting out the code as it was and started by adding in a simple function that would divide out the items based on name. Standard items then ran through their own method to deal with their sellIn and quality values and the other items were directed to their individual methods too.

I then built up each method individually, one at a time, thinking about the edge cases and potential varieties of values for each item. This allowed me to rebuild the code so that it could be easily adapted and scaled out further but retaining all core functionality too.

After I had completed this for each of the preexisting items I moved on to adding in the new functionality. I wrote test to ensure the functionality of these items was as expected and ensured that edge cases still passed these tests too.

I would like to begin to refactor the code further if I have time at some point in the future. There are no longer any nested if statements but there are a lot of paths through the system too. With this in mind I think there will be ways to refactor this code further and make it even easier to follow.

## Issues

Currently the value of Aged Brie continues to increase after its sellIn date, but also the rate at which it increases is 2 per day. I am unsure if this is the intended functionality or not but I will leave this functionality as it is and have tested it to make sure my refactoring does not affect it working as it does now.

It is stated in the outline that the quality of an item is never more than 50, but the quality of Sulfuras is set at 80. I have not altered this but wanted to highlight it as a potential error in the system.

## Running the app locally

* Clone the repository.
* In the terminal type `Open SpecRunner.html` to run the tests.
* Then type `Open TexttestFixture.html` to see a print out of the code functionality.
