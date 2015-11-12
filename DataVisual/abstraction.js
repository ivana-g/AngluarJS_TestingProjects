(function () {

    var program = function () {
        /*
        Level of abstraction 
        Functions that do the work;
        Functions that execute work;
        Passing functions to other functions; Separating concerns;
        */

        var work = function () {
            console.log("working hard");
        };

        var doWork = function (f) {

            console.log("start work");
            try {
                f();
            } catch (ex) {
                console.log(ex);
            }
            console.log("end work");
        };

        doWork(work);

        /* Simulations of modules: 
        Objects, data, and methods applied to those objects. */

        /* Create work is a module. It shows encapsulation of code. 
        CreateWorker creates scope. */
        var createWorker = function () {

            var workCount = 0;

            var task1 = function () {
                workCount++;
                console.log("task1 " + workCount);
            };

            var task2 = function () {
                workCount++;
                console.log("task2 " + workCount);
            };

            /*job1 object that points to task1 method
             job2 object that points to task2 method*/
            return {
                job1: task1,
                job2: task2
            };
        };

        var worker = createWorker();

        worker.job1();
        worker.job2();
        worker.job2();
        worker.job2();
    };
    program();
}());