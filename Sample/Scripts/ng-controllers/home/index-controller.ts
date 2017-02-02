module sampleapp.controllers.home {
    class IndexController {
        constructor() {
        }

        hello(): void {
            alert("hello");
        }
    }

    angular.module("sampleapp")
        .controller("home-index-controller", [ () => new IndexController() ]);
}
