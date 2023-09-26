import React from 'react';
import './Share.scss';

function TwitterFollowButton() {
  return (
    <div className="trapdoor">
      <div className="top door"></div>
      <div className="bottom door"></div>
      <a
        href="https://twitter.com/twholman"
        className="twitter-follow-button"
        data-show-count="false"
        data-size="large"
        data-dnt="false"
      >
        Follow @twholman
      </a>
      <script>
        {`
          !function(d,s,id){
            var js,fjs=d.getElementsByTagName(s)[0];
            if(!d.getElementById(id)){
              js=d.createElement(s);
              js.id=id;
              js.src="https://platform.twitter.com/widgets.js";
              fjs.parentNode.insertBefore(js,fjs);
            }
          }(document,"script","twitter-wjs");
        `}
      </script>
    </div>
  );
}

export default TwitterFollowButton;
