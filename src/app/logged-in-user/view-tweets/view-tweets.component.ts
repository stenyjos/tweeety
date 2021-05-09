import { Component, Input, OnInit } from '@angular/core';
import { TweetMessageService } from 'src/app/service/tweet-message.service';

@Component({
  selector: 'app-view-tweets',
  templateUrl: './view-tweets.component.html',
  styleUrls: ['./view-tweets.component.css']
})
export class ViewTweetsComponent implements OnInit {

  myTweet:any;

  @Input()
  tweetData: any = [];
  @Input()
  userDetails:any;
  @Input()
  module = '';

  constructor(
    private tweetMessageService :TweetMessageService,
  ) {}

  ngOnInit(): void {
 this.userDetails;
 this.getMyTweet();
    // this.tweetData = [
    //   {
    //     userName: 'Karun Jossy',
    //     loginId: 'karunjossy333',
    //     tweet: 'My First Tweet',
    //     postTime: '02 Apr 2021 10:35:00',
    //     hashTag: 'FirstTweet',
    //     isLiked: true,
    //     noOfLikes: 10,
    //     replyTweet: [
    //       {
    //         userName: 'Karun Jossy',
    //         loginId: 'karunjossy333',
    //         tweet: 'My First Reply Tweet',
    //         postTime: '02 Apr 2021 10:35:00',
    //         replyId: 'karunjossy333',
    //         hashTag: 'FirstReplyTweet',
    //         noOfLikes: 50,
    //         isLiked: false
    //       }
    //     ]
    //   }
    // ];
  }
  
async getMyTweet(){
  await this.tweetMessageService.viewMyTweets(this.userDetails.userId).subscribe(data =>{
    {
    this.myTweet = data;
    this.initializeDetails();
    }
   });
}
initializeDetails()
{
  this.tweetData=[];
  let i =0;
  for(i = 0; i< this.myTweet.length; i++)
  {
  this.tweetData.push(
  {
  loginId : this.userDetails.firstName+this.userDetails.userId,
  userName : this.userDetails.firstName,
  postTime : this.myTweet[i].createdAt,
  tweet : this.myTweet[i].tweetMsg
  });
}

}

  onTweetLike(): void {

  }

  onReply(): void {

  }

}
