export function realTimeFunc(time) {
    if (typeof time == 'number') {
        let start = time; 
        let end = Date.now();
        let newDate = end - start; 
        // console.log(newDate)

        let milliSec = newDate;
        let seconds = Math.trunc(milliSec / 1000);
        let minutes = Math.trunc(seconds / 60);
        let hours = Math.trunc(minutes / 60);
        let days = Math.trunc(hours / 24);
        let weeks = Math.trunc(days / 7);
        let months = Math.trunc(weeks / 4.345);


        if (months > 0) {
            return `${months} months ago`

        } else if (weeks > 0) {
            if (weeks === 1) {
                return `1 week ago`;
            }
            return `${weeks} weeks ago`
        } else if (days > 0) {
            if (days === 1)  {
                return `1 day ago`;
            }
            return `${days} days ago`
        } else if (hours > 0) {
            if(hours === 1) {
                return `1 hour ago`;
            }
            return `${hours} hours ago`
        } else if (minutes > 0) {
            if (minutes === 1) {
                return `1 minute ago`;
            }
            return `${minutes} minutes ago`
        } else {
            if (seconds === 1) {
                return `${seconds} seconds ago`;
            }
        }


    }
}

// let milliSec = timeInterval(object);
//         let second = Math.trunc(milliSec / 1000);
//         let minute = Math.trunc(second / 60);
//         let hours = Math.trunc(minute / 60);
//         let days = Math.trunc(hours / 24);

//         if (days > 0) {
//             return `${days} days ago`;
//         } else if (hours > 0) {
//             return `${hours} hours ago`;
//         } else if (minute > 0) {
//             return `${minute} minutes ago`
//         } else {
//             return "Just Posted"
//         }
//     } else {
//         return object.date;
//     }