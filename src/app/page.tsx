"use client";
import { useEffect, useState } from "react";

import Image from "next/image";
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

import { motion } from "framer-motion";

import styles from "./page.module.scss";
import Header from "./components/Header";
import Card from "./components/Card";
import ProfileCell from "./components/ProfileCell";

const fadeInUp = {
  animate: { opacity: 1, scale: 1 },
  initial: { opacity: 0, scale: 0 },
};

const metadata = `<span class="white">player_metadata = {</span>
"player _name": "JohnDoe123",
"gaming_platform": "PC",
"game_level": <span class="red">25</span>,
"achievements": ["Master of the Arena", "Legendary Explorer"],
"total_score": <span class="red">2000</span>,
"preferred_game_mode": "Team Deathmatch",
"collected items": {
    "weapon": "Legendary Sword",
    "armor": "Epic Plate Armor",
    "pet": "Fire Dragon"
  <span class="white">}
}</span>`;

const users = [
  {
    name: "MonkeyIslander872",
    image: User1,
    metadata,
  },
  {
    name: "mean_deal_",
    image: User2,
    metadata,
  },
  {
    name: "TennisChallenger",
    image: User3,
    metadata,
  },
  {
    name: "DoozieWoozie",
    image: User4,
    metadata,
  },
  {
    name: "tired0fbeIngWired",
    image: User5,
    metadata,
  },
  {
    name: "Greendragon_",
    image: User6,
    metadata,
  },
];

export default function Home() {
  const [windowWidth, setWindowWidth] = useState<number>(1000);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
          <Card
            title={"Gaming social layer"}
            description="Gamers take control of their data."
            image={Layer}
          />
          <Card
            title={"Build next-gen fat dapps"}
            description="Plug any apps on top of the gaming social layer."
            image={Star}
          />
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
          {users.map((user, ind) => (
            <ProfileCell
              opposite={ind % 2 !== 0}
              key={user.name}
              name={user.name}
              image={user.image}
              metaData={user.metadata}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
