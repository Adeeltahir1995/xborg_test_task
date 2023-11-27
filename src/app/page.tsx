"use client"
import { motion } from "framer-motion";
import Image from "next/image";

// Importing assets
import {
  Bubbles,
  GamingSectionIllustration,
  HeroSectionAvatar,
  HeroSectionRadial,
  Layer,
  NFT,
  Pills,
  ScrollDown,
  Secure,
  Star,
  User1,
  User2,
  User3,
  User4,
  User5,
  User6,
} from "./assets";

// Import mock data
import mockUsers from "./mocks/users.json";
import mockFeatures from "./mocks/features.json";

// Import components
import Header from "./components/Header";
import Card from "./components/Card";
import ProfileCell from "./components/ProfileCell";

// Import types

import styles from "./page.module.scss";
import { FeatureType } from "./types/Features";
import { UserType } from "./types/Users";
import useWindowWidth from "./hooks/useWindowWidth";

const fadeInUp = {
  animate: { opacity: 1, scale: 1 },
  initial: { opacity: 0, scale: 0 },
};

const usersImages: any = {
  user1: User1,
  user2: User2,
  user3: User3,
  user4: User4,
  user5: User5,
  user6: User6,
};

const featuresImages: any = {
  layer: Layer,
  star: Star,
};

export default function Home() {
  const windowWidth = useWindowWidth();

  const users = mockUsers as UserType[];
  const features = mockFeatures as FeatureType[];

  return (
    <div className={styles.home}>
      {windowWidth < 600 && <Header />}
      <section className={styles["home__hero"]}>
        {windowWidth > 600 && (
          <Image
            className={styles["radial"]}
            src={HeroSectionRadial}
            alt="xborg_hero_section_radial"
            width={990}
          />
        )}
        <motion.div
          {...fadeInUp}
          initial={{ scale: 1, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            className={styles["avatar"]}
            src={HeroSectionAvatar}
            alt="xborg_hero_section_avatar"
            width={"870"}
          />
        </motion.div>
        <div className={styles["home__hero-container"]}>
          <div className={styles["hero__content"]}>
            <div className={styles["hero__content-text"]}>
              Lorem ipsum dolor
            </div>
            <h1
              dangerouslySetInnerHTML={{
                __html:
                  windowWidth > 600
                    ? "Game-changing <br/> infrastructure"
                    : "Empowering players & fans",
              }}
            ></h1>
            <p>
              {windowWidth > 600
                ? "A decentralised, non-custodial social graph, empowering players to take full ownership of their gaming identities and enabling developers to build next-gen applications."
                : "We’re a global team on a mission to build the next-generation of gaming, where players and fans experience ownership, and governance and are rewarded for their contributions."}
            </p>
            <button className={"button"}>Join Discord</button>
          </div>
          <div className={styles["hero__user"]}>
            <motion.div
              {...fadeInUp}
              transition={{ duration: 0.3, delay: 0.3 }}
              className={styles["hero__user-detail"]}
            >
              <Image src={NFT} alt="xborg_user_nft" width={98} />
              <span>User id:</span>
              <p>XBorg001</p>
              <Image src={Secure} alt="xborg_user_secure" />
            </motion.div>
            <motion.div
              {...fadeInUp}
              transition={{ duration: 0.3, delay: 0.6 }}
            >
              <Image
                src={Pills}
                alt={"xborg_user_pills"}
                className={styles["pills"]}
              />
            </motion.div>
          </div>
        </div>
        <Image
          src={ScrollDown}
          alt={"xborg_scroll-down"}
          className={styles["scroll-down"]}
        />
      </section>
      <section className={styles["home__value"]}>
        <Image
          src={Bubbles}
          alt="xborg_bubbles"
          height={245}
          className={styles["bubbles"]}
        />
        <div className={styles["home__value-title-box"]}>
          <h1>The value network of gaming</h1>
          <p>
            The fundamental protocol that allows anyone to create gaming
            applications built on top of player identities.
          </p>
        </div>
        <div className={styles["home__value-cards"]}>
          {features.map((feature: FeatureType) => (
            <Card
              key={feature.title}
              title={feature.title}
              description={feature.description}
              image={featuresImages[feature.image]}
            />
          ))}
        </div>
      </section>
      <section className={styles["home__gaming"]}>
        <Image
          className={styles["home__gaming-illustration"]}
          src={GamingSectionIllustration}
          alt="xborg gaming section illustration"
          height={950}
        />
        <div className={styles["home__gaming-content"]}>
          <div>The New Gaming Web</div>
          <p>
            At the core of the XBorg Data Graph Protocol lies a dynamic and
            interconnected network of gaming profiles. Each player&apos;s
            profile is represented as a unique ERC-721 NFT, complete with
            metadata unique to their gaming journey.{" "}
          </p>
        </div>
        <div className={styles["home__gaming-users"]}>
          {users?.map((user: UserType, ind: number) => (
            <ProfileCell
              opposite={ind % 2 !== 0}
              key={user.name}
              name={user.name}
              image={usersImages[user.image]}
              metaData={user.metadata}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
