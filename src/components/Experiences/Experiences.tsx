import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './Experiences.module.css';
import { GithubCircle_Coreui_icons_v111 } from './GithubCircle_Coreui_icons_v111';
import { HeaderImageIcon } from './HeaderImageIcon';
import { IconmonstrLinkedin31Icon } from './IconmonstrLinkedin31Icon';

interface Props {
  className?: string;
}
/* @figmaId 6:14 */
export const Experiences: FC<Props> = memo(function Experiences(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.background}></div>
      <div className={classes.contact}>Contact</div>
      <div className={classes.home}>Home</div>
      <div className={classes.aboutOpenKAT}>About OpenKAT</div>
      <div className={classes.experiences}>Experiences</div>
      <div className={classes.overview}>Overview</div>
      <div className={classes.getInTouch}>Get in touch!</div>
      <div className={classes.githubCircle_CoreUI_Icons_v111}>
        <GithubCircle_Coreui_icons_v111 className={classes.icon} />
      </div>
      <div className={classes.iconmonstrLinkedin31}>
        <IconmonstrLinkedin31Icon className={classes.icon2} />
      </div>
      <div className={classes.connectOn}>Connect on</div>
      <div className={classes.joinTheCommunity}>Join the Community </div>
      <div className={classes.headerImage}></div>
      <div className={classes.userSExperiences}>
        <div className={classes.textBlock}>Experiences</div>
        <div className={classes.textBlock2}>
          <p></p>
        </div>
      </div>
      <div className={classes.partnersTrustingOpenKAT}>Partners trusting OpenKAT</div>
      <div className={classes.headerImage2}>
        <HeaderImageIcon className={classes.icon3} />
      </div>
      <div className={classes.backroundBlock}></div>
      <div className={classes.openKATWasDevelopedDuringTheCo}>
        OpenKAT was developed during the Covid-19 pandemic for the Ministry of VWS and was involved in discovering
        possible data breaches of the CoronaMelder-App. OpenKAT has since been made open-source, and is available for
        everyone to use and develop.
      </div>
      <div className={classes.ourStory}>Our story</div>
      <div className={classes.carousel}>
        <div className={classes.rectangle1}></div>
        <div className={classes.rectangle7}></div>
        <div className={classes.image6}></div>
        <div className={classes.rectangle6}></div>
        <div className={classes.ISeeTheSoftwareAsSuitableForCo}>
          “I see the software as suitable for compliance testing in all sorts of settings. The crucial thing is to keep
          the existing partnerships going”
        </div>
        <div className={classes.rectangle12}></div>
        <div className={classes.rectangle62}></div>
        <div className={classes.logo1}></div>
        <div className={classes.TheGreatThingAboutKATIsThatWeC}>
          “The great thing about KAT is that we can closely follow the development of security and vulnerabilities that
          are often missed. We see in practice how systems improve quickly through continuous monitoring. All this
          without a negative privacy aftertaste.”
        </div>
        <div className={classes.rectangle13}></div>
        <div className={classes.rectangle63}></div>
        <div className={classes.ThereAreALotOfPowerfulOpenSour}>
          “There are a lot of powerful open-source tools on the market that are very strong in themselves at performing
          a specific action. But what if all these tools could be properly integrated with each other? What if these
          tools together form a powerful scanner to detect all kinds of vulnerabilities? That is what the developers of
          OpenKAT had in mind when developing this tool”
        </div>
        <div className={classes.image5}></div>
      </div>
      <div className={classes.bar}></div>
      <div className={classes.openGATA}>OpenGÁTA</div>
      <div className={classes.cat1}></div>
      <div className={classes.contact2}>Contact</div>
      <div className={classes.aboutOpenKAT2}>About OpenKAT</div>
      <div className={classes.experiences2}>Experiences</div>
    </div>
  );
});
