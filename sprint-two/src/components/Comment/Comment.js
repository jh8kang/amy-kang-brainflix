import './Comment.scss';

// timeCalculator takes in a string and returns a readable time string
// function timeCalculator(date) {
//     let todayMonth = 12;
//     let todayDay = 19;
//     let todayYear = 2018;
//     let month = Number(date.slice(0, 2));
//     let day = Number(date.slice(3, 5));
//     let year = Number(date.slice(6));

//     if (year < todayYear) {
//         return `${todayYear - year} years ago`;
//     } else if (month === todayMonth - 1) {
//         return '1 month ago';
//     } else if (month < todayMonth ) {
//         return `${todayMonth - month} months ago`;
//     } else if (day === todayDay - 1) {
//         return '1 day ago';
//     } else if (day < todayDay) {
//         return `${todayDay - day} days ago`;
//     } 
// }

// Comment component takes in props and returns JXN for a single comment 
function Comment({name, timestamp, comment, id}) {
    return (
        <div className="comment" key={id} >
            <div className="comment__img"></div>
            <div className="comment__data">
                <div className="comment__data-info">
                    <p className="comment__data-info-name">{name}</p>
                    <p className="comment__data-info-time">{timestamp}</p>
                </div>
                <p className="comment__data-comment">{comment}</p>
            </div>
        </div>
    )
}

export default Comment