

function debounce(f, N) {

    var timer, count;

    return function() {
        count++;
        if (timer != null) {
            if (count < N){
                f.apply(this, arguments);
            }
            return;
        }

        f.apply(this, arguments);
        timer = setTimeout( function() {timer = null; count=1}, 1000);
    }

}