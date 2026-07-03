# "End-to-End" Flow
An end to end automated test, user logs in, adds a product in the cart, navigates to cart and checks it's existence in the cart.
Then proceeds to checkout, fills in the info form like first name, last name and etc, completes the checkout and validates the success message.

## Prerequisites
* Node.js v23.9.0
* Chrome and Edge must be installed locally



### How to run and download  the test on your pc:



```bash
git clone https://github.com/MarceloChirau/epam-task.git
cd epam-task
npm install
```


### To run the test:

```bash
npm test

```
This command will run both UC-1 and UC-2.


###  To generate report:
You don't need to do anything, report is generated automatically every time you run npm test. Generated reports are stored in *src/outputTest/timeline-report.html* folder.
To open the report just double click on *timeline-report.html*


#### See pictures from timeline reporter:

![Part one of report ](./images/part1.png)
![Part two of report ](./images/part2.png)
![Part three of report ](./images/part3.png)

### Click on the link to see a video of the report:
[report video](https://youtu.be/n7SEg-pQ090)