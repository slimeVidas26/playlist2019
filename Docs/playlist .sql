-- phpMyAdmin SQL Dump
-- version 4.2.11
-- http://www.phpmyadmin.net
--
-- Client :  127.0.0.1
-- Généré le :  Sam 25 Janvier 2020 à 18:01
-- Version du serveur :  5.6.21
-- Version de PHP :  5.6.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données :  `playlist`
--

-- --------------------------------------------------------

--
-- Structure de la table `playlists`
--

CREATE TABLE IF NOT EXISTS `playlists` (
`id` int(11) NOT NULL,
  `name` varchar(100) CHARACTER SET hp8 COLLATE hp8_bin NOT NULL,
  `image` varchar(1000) CHARACTER SET hp8 COLLATE hp8_bin NOT NULL,
  `songs` text CHARACTER SET hp8 COLLATE hp8_bin NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=91 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Contenu de la table `playlists`
--

INSERT INTO `playlists` (`id`, `name`, `image`, `songs`) VALUES
(52, 'VA-DJ Triple Exe-Street Kings 45', 'https://ia800404.us.archive.org/32/items/VA-DJ_Triple_Exe-Street_Kings_45/00cover.jpg', '[{"name":"01-Rich Homie Quan-Flex","url":"https:\\/\\/ia802909.us.archive.org\\/35\\/items\\/fsz038\\/fsz038_09-chenard_walcker-tiger_pump_2001.mp3"},{"name":"02-K Camp Ft. Fetty Wap-1Hunnid (Remix)","url":"https:\\/\\/ia802909.us.archive.org\\/35\\/items\\/fsz038\\/fsz038_04-chenard_walcker-temporary_pony_song_for_megan_s_boyfriend.mp3"},{"name":"03-J.Cole-Wet Dreamz","url":"https:\\/\\/ia802909.us.archive.org\\/35\\/items\\/fsz038\\/fsz038_09-chenard_walcker-tiger_pump_2001.mp3"},{"name":"04-Jamie XX Ft. Young Thug-I Know There''s Gonna Be Good Times","url":"https:\\/\\/ia600404.us.archive.org\\/32\\/items\\/VA-DJ_Triple_Exe-Street_Kings_45\\/04-Jamie%20XX%20Ft.%20Young%20Thug-I%20Know%20There%27s%20Gonna%20Be%20Good%20Times.mp3"}]'),
(54, '2po2 - Hip Hop Filozofi', 'https://ia800800.us.archive.org/16/items/2po2-HipHopFilozofi/Icon.jpg', '[{"name":"Intro ","url":"https:\\/\\/ia600800.us.archive.org\\/16\\/items\\/2po2-HipHopFilozofi\\/01.%20Intro.mp3"},{"name":"Sa po m''kupton ","url":"https:\\/\\/ia600800.us.archive.org\\/16\\/items\\/2po2-HipHopFilozofi\\/02.%20Sa%20po%20m%27kupton.mp3"},{"name":"Qielli im ","url":"https:\\/\\/ia800800.us.archive.org\\/16\\/items\\/2po2-HipHopFilozofi\\/03.%20Qielli%20im.mp3"},{"name":"Jetoj ","url":"https:\\/\\/ia800800.us.archive.org\\/16\\/items\\/2po2-HipHopFilozofi\\/04.%20Jetoj.mp3"},{"name":"Potpuri rrenash","url":"https:\\/\\/ia600800.us.archive.org\\/16\\/items\\/2po2-HipHopFilozofi\\/05.%20Potpuri%20rrenash.mp3"},{"name":"M\\u00ebrzitsh\\u00ebm (Feat. Immortel) ","url":"https:\\/\\/ia600800.us.archive.org\\/16\\/items\\/2po2-HipHopFilozofi\\/06.%20M%C3%ABrzitsh%C3%ABm%20%28Feat.%20Immortel%29.mp3"},{"name":"Vdes dhe ringjallem","url":"https:\\/\\/ia800800.us.archive.org\\/16\\/items\\/2po2-HipHopFilozofi\\/07.%20Vdes%20dhe%20ringjallem.mp3"},{"name":"Made in Shqiptari ","url":"https:\\/\\/ia800800.us.archive.org\\/16\\/items\\/2po2-HipHopFilozofi\\/08.%20Made%20in%20Shqiptari.mp3"},{"name":"Prishtinali jom (Feat. Tingulli i 3''nt)","url":"https:\\/\\/ia800800.us.archive.org\\/16\\/items\\/2po2-HipHopFilozofi\\/09.%20Prishtinali%20jom%20%28Feat.%20Tingulli%20i%203%27nt%29.mp3"},{"name":"Hip Hop Shqip 2","url":"https:\\/\\/ia800800.us.archive.org\\/16\\/items\\/2po2-HipHopFilozofi\\/10.%20Hip%20Hop%20Shqip%202.mp3"},{"name":"Kush (Feat. Don Pizhi & Memli Krasniqi)","url":"https:\\/\\/ia800800.us.archive.org\\/16\\/items\\/2po2-HipHopFilozofi\\/11.%20Kush%20%28Feat.%20Don%20Pizhi%20%26%20Memli%20Krasniqi%29.mp3"},{"name":"Interlude Rraha ","url":"https:\\/\\/ia800800.us.archive.org\\/16\\/items\\/2po2-HipHopFilozofi\\/12.%20Interlude%20Rraha.mp3"},{"name":"Hip Hop Filozofi (Feat. Sefer Gremlini)","url":"https:\\/\\/ia800800.us.archive.org\\/16\\/items\\/2po2-HipHopFilozofi\\/13.%20Hip%20Hop%20Filozofi%20%28Feat.%20Sefer%20Gremlini%29.mp3"},{"name":"I lig\\u00eb p\\u00ebr armik ","url":"https:\\/\\/ia800800.us.archive.org\\/16\\/items\\/2po2-HipHopFilozofi\\/14.%20I%20lig%C3%AB%20p%C3%ABr%20armik.mp3"},{"name":"Qartu ","url":"https:\\/\\/ia800800.us.archive.org\\/16\\/items\\/2po2-HipHopFilozofi\\/15.%20Qartu.mp3"},{"name":"Haver (Feat. G-Soldier & Adalard)","url":"https:\\/\\/ia800800.us.archive.org\\/16\\/items\\/2po2-HipHopFilozofi\\/16.%20Haver%20%28Feat.%20G-Soldier%20%26%20Adalard%29.mp3"},{"name":"Ngrehja kam\\u00ebn","url":"https:\\/\\/ia800800.us.archive.org\\/16\\/items\\/2po2-HipHopFilozofi\\/17.%20Ngrehja%20kam%C3%ABn.mp3"},{"name":"Outro ","url":"https:\\/\\/ia800800.us.archive.org\\/16\\/items\\/2po2-HipHopFilozofi\\/18.%20Outro.mp3"}]'),
(55, 'Lil Uzi Vert - Luv Is Rage', 'https://ia801607.us.archive.org/20/items/Lil_Uzi_Vert_-_Luv_Is_Rage_1.5-2017/Cover.jpg', '[{"name":"Luv Scars K.O. 1600 ","url":"https:\\/\\/ia801607.us.archive.org\\/20\\/items\\/Lil_Uzi_Vert_-_Luv_Is_Rage_1.5-2017\\/01%20Lil%20Uzi%20Vert%20-%20Luv%20Scars%20K.O.%201600.mp3"},{"name":"Xo Tour Life ","url":"https:\\/\\/ia801607.us.archive.org\\/20\\/items\\/Lil_Uzi_Vert_-_Luv_Is_Rage_1.5-2017\\/02%20Lil%20Uzi%20Vert%20-%20Xo%20Tour%20Life.mp3"},{"name":"Boring Shit ","url":"https:\\/\\/ia801607.us.archive.org\\/20\\/items\\/Lil_Uzi_Vert_-_Luv_Is_Rage_1.5-2017\\/03%20Lil%20Uzi%20Vert%20-%20Boring%20Shit.mp3"},{"name":"Ysl ","url":"https:\\/\\/ia801607.us.archive.org\\/20\\/items\\/Lil_Uzi_Vert_-_Luv_Is_Rage_1.5-2017\\/04%20Lil%20Uzi%20Vert%20-%20Ysl.mp3"}]'),
(57, 'Kevin Gates - Arm & Hammer-2016', 'https://ia801203.us.archive.org/11/items/Kevin_Gates_-_Arm_and_Hammer-2016/Cover.jpg', '[{"name":"Arm Hammer","url":"https:\\/\\/ia801203.us.archive.org\\/11\\/items\\/Kevin_Gates_-_Arm_and_Hammer-2016\\/01%20-%20Kevin%20Gates%20-%20Arm%20%20Hammer.mp3"},{"name":"Fast Lane Ft All Star And Young Freq","url":"https:\\/\\/ia801203.us.archive.org\\/11\\/items\\/Kevin_Gates_-_Arm_and_Hammer-2016\\/02%20-%20Kevin%20Gates-Fast%20Lane%20ft%20All%20Star%20and%20Young%20Freq.mp3"},{"name":"Tattoo Session","url":"https:\\/\\/ia801203.us.archive.org\\/11\\/items\\/Kevin_Gates_-_Arm_and_Hammer-2016\\/03%20-%20Kevin%20Gates-Tattoo%20Session.mp3"}]'),
(59, 'Kevin Gates - By Any Means-2014', 'https://ia800405.us.archive.org/31/items/Kevin_Gates_-_By_Any_Means-2014/Cover.jpg', '[{"name":"Wish I Had It","url":"https:\\/\\/ia800405.us.archive.org\\/31\\/items\\/Kevin_Gates_-_By_Any_Means-2014\\/01%20Kevin%20Gates%20-%20Wish%20I%20Had%20It.mp3"},{"name":"Don''t Know","url":"https:\\/\\/ia800405.us.archive.org\\/31\\/items\\/Kevin_Gates_-_By_Any_Means-2014\\/02%20Kevin%20Gates%20-%20Don%27t%20Know.mp3"},{"name":"Amnesia (Feat. Doe B)","url":"https:\\/\\/ia600405.us.archive.org\\/31\\/items\\/Kevin_Gates_-_By_Any_Means-2014\\/03%20Kevin%20Gates%20-%20Amnesia%20%28Feat.%20Doe%20B%29.mp3"}]'),
(63, 'YFN Lucci - Wish Me Well 2-2016', 'https://ia800405.us.archive.org/26/items/YFN_Lucci_-_Wish_Me_Well_2-2016/Cover.jpg', '[{"name":"Destined Feat Bigga Rankin Prod By Young N Fly","url":"https:\\/\\/ia600405.us.archive.org\\/26\\/items\\/YFN_Lucci_-_Wish_Me_Well_2-2016\\/01%20-%20YFN%20Lucci-Destined%20Feat%20Bigga%20Rankin%20Prod%20By%20Young%20N%20Fly.mp3"},{"name":"Yfn Prod By Tm88","url":"https:\\/\\/ia800405.us.archive.org\\/26\\/items\\/YFN_Lucci_-_Wish_Me_Well_2-2016\\/02%20-%20YFN%20Lucci-YFN%20Prod%20By%20TM88.mp3"},{"name":"Talk That Shit Prod By Og Parker Goldenchyld","url":"https:\\/\\/ia800405.us.archive.org\\/26\\/items\\/YFN_Lucci_-_Wish_Me_Well_2-2016\\/03%20-%20YFN%20Lucci-Talk%20That%20Shit%20Prod%20By%20OG%20Parker%20Goldenchyld.mp3"}]'),
(65, 'Kevin Gates - Self Medicated-2016', 'https://ia800408.us.archive.org/4/items/Kevin_Gates_-_Self_Medicated-2016/Cover.jpg', '[{"name":"Run The City","url":"https:\\/\\/ia800408.us.archive.org\\/4\\/items\\/Kevin_Gates_-_Self_Medicated-2016\\/01%20-%20Kevin%20Gates%20-%20Run%20The%20City.mp3"},{"name":"Get Gangsta","url":"https:\\/\\/ia600408.us.archive.org\\/4\\/items\\/Kevin_Gates_-_Self_Medicated-2016\\/02%20-%20Kevin%20Gates%20-%20Get%20Gangsta.mp3"},{"name":"I Be","url":"https:\\/\\/ia800408.us.archive.org\\/4\\/items\\/Kevin_Gates_-_Self_Medicated-2016\\/03%20-%20Kevin%20Gates%20-%20I%20Be.mp3"}]'),
(68, 'Kevin Gates - Make Em Believe-2012', 'https://ia800406.us.archive.org/20/items/Kevin_Gates_-_Make_Em_Believe-2012/Cover.jpg', '[{"name":"Intro (I Ain''t)","url":"https:\\/\\/ia800406.us.archive.org\\/20\\/items\\/Kevin_Gates_-_Make_Em_Believe-2012\\/01%20Kevin%20Gates%20-%20Intro%20%28I%20Ain%27t%29.mp3"},{"name":"Make Em Believe","url":"https:\\/\\/ia800406.us.archive.org\\/20\\/items\\/Kevin_Gates_-_Make_Em_Believe-2012\\/02%20Kevin%20Gates%20-%20Make%20Em%20Believe.mp3"},{"name":"Don''t Know What To Call It","url":"https:\\/\\/ia800406.us.archive.org\\/20\\/items\\/Kevin_Gates_-_Make_Em_Believe-2012\\/03%20Kevin%20Gates%20-%20Don%27t%20Know%20What%20To%20Call%20It.mp3"}]'),
(70, 'NBA Youngboy - A.I. Youngboy-2017', 'https://ia600800.us.archive.org/6/items/NBA_Youngboy_-_A.I._Youngboy-2017/Cover.jpg', '[{"name":"Trappin''","url":"https:\\/\\/ia600800.us.archive.org\\/6\\/items\\/NBA_Youngboy_-_A.I._Youngboy-2017\\/01%20Nba%20Youngboy%20-%20Trappin%27.mp3"},{"name":"Wat Chu Gone Do (Feat. Peewee Longway)","url":"https:\\/\\/ia800800.us.archive.org\\/6\\/items\\/NBA_Youngboy_-_A.I._Youngboy-2017\\/02%20Nba%20Youngboy%20-%20Wat%20Chu%20Gone%20Do%20%28Feat.%20Peewee%20Longway%29.mp3"},{"name":"No Smoke","url":"https:\\/\\/ia800800.us.archive.org\\/6\\/items\\/NBA_Youngboy_-_A.I._Youngboy-2017\\/03%20Nba%20Youngboy%20-%20No%20Smoke.mp3"}]'),
(72, 'VA-DJ Wavy & It''s Bizkit - New Waves', 'https://ia800404.us.archive.org/13/items/VA-DJ_Wavy_and_Its_Bizkit_-_New_Waves-2016/Cover.jpg', '[{"name":"Elevators","url":"https:\\/\\/ia600404.us.archive.org\\/13\\/items\\/VA-DJ_Wavy_and_Its_Bizkit_-_New_Waves-2016\\/01%20Dj%20Wavy%20-%20Elevators.mp3"},{"name":"Halftime","url":"https:\\/\\/ia800404.us.archive.org\\/13\\/items\\/VA-DJ_Wavy_and_Its_Bizkit_-_New_Waves-2016\\/02%20Young%20Thug%20-%20Halftime.mp3"},{"name":"Special","url":"https:\\/\\/ia800404.us.archive.org\\/13\\/items\\/VA-DJ_Wavy_and_Its_Bizkit_-_New_Waves-2016\\/03%20Young%20Thug%20-%20Special.mp3"}]'),
(73, 'Young Thug & Migos - Migos Thuggin-2015', 'https://ia800404.us.archive.org/10/items/Young_Thug_and_Migos_-_Migos_Thuggin-2015/Cover.jpg', '[{"name":"Young Thug - First Up","url":"https:\\/\\/ia800404.us.archive.org\\/10\\/items\\/Young_Thug_and_Migos_-_Migos_Thuggin-2015\\/01%20-%20Young%20Thug%20-%20First%20Up.mp3"},{"name":"Migos - Richer Than Rappers","url":"https:\\/\\/ia800404.us.archive.org\\/10\\/items\\/Young_Thug_and_Migos_-_Migos_Thuggin-2015\\/02%20-%20Migos%20-%20Richer%20Than%20Rappers.mp3"},{"name":"Young Thug - No Joke","url":"https:\\/\\/ia800404.us.archive.org\\/10\\/items\\/Young_Thug_and_Migos_-_Migos_Thuggin-2015\\/03%20-%20Young%20Thug%20-%20No%20Joke.mp3"}]'),
(76, 'Kevin Gates - Label Me Real-2015', 'https://ia800407.us.archive.org/1/items/Kevin_Gates_-_Label_Me_Real-2015/Cover.jpg', '[{"name":"Truth (Officialdjclout)","url":"https:\\/\\/ia800407.us.archive.org\\/1\\/items\\/Kevin_Gates_-_Label_Me_Real-2015\\/01%20-%20Kevin%20Gates%20-%20Truth%20%28OfficialDjClout%29.mp3"},{"name":" Got It (Officialdjclout)","url":"https:\\/\\/ia800407.us.archive.org\\/1\\/items\\/Kevin_Gates_-_Label_Me_Real-2015\\/02%20-%20Kevin%20Gates%20-%20Got%20It%20%28OfficialDjClout%29.mp3"},{"name":"To The Money (Officialdjclout)","url":"https:\\/\\/ia800407.us.archive.org\\/1\\/items\\/Kevin_Gates_-_Label_Me_Real-2015\\/03%20-%20Hurricane%20Chris%20Kevin%20Gates%20-%20To%20The%20Money%20%28OfficialDjClout%29.mp3"}]'),
(84, 'Eminem - A Beautiful Mind', 'https://ia600407.us.archive.org/2/items/Eminem_-_A_Beautiful_Mind/A%20Beautiful%20Mind%20Front%20Cover.jpg', '[{"name":"The Way You Lie Pt. 2 (Feat. Rihanna)","url":"https:\\/\\/ia800407.us.archive.org\\/2\\/items\\/Eminem_-_A_Beautiful_Mind\\/01%29%20Eminem%20-%20The%20Way%20You%20Lie%20Pt.%202%20%28Feat.%20Rihanna%29.mp3"},{"name":"Roman''s Revenge (Feat. Nicki Minaj)","url":"https:\\/\\/ia600407.us.archive.org\\/2\\/items\\/Eminem_-_A_Beautiful_Mind\\/02%29%20Eminem%20-%20Roman%27s%20Revenge%20%28Feat.%20Nicki%20Minaj%29.mp3"},{"name":"The Cypher","url":"https:\\/\\/ia800407.us.archive.org\\/2\\/items\\/Eminem_-_A_Beautiful_Mind\\/03%29%20Eminem%20-%20The%20Cypher.mp3"}]'),
(85, 'DJ Kurupt - Narley (Lil Boosie)-2014', 'https://ia800408.us.archive.org/16/items/DJ_Kurupt_-_Narley_Lil_Boosie-2014/Cover.jpg', '[{"name":"Lil Boosie & Future - Rich Off Lean","url":"https:\\/\\/ia800408.us.archive.org\\/16\\/items\\/DJ_Kurupt_-_Narley_Lil_Boosie-2014\\/01%20Lil%20Boosie%20%26%20Future%20-%20Rich%20Off%20Lean.mp3"},{"name":"5 Star (Remix)","url":"https:\\/\\/ia800408.us.archive.org\\/16\\/items\\/DJ_Kurupt_-_Narley_Lil_Boosie-2014\\/02%20Lil%20Boosie%20-%205%20Star%20%28Remix%29.mp3"},{"name":"Turn The Beat Up","url":"https:\\/\\/ia800408.us.archive.org\\/16\\/items\\/DJ_Kurupt_-_Narley_Lil_Boosie-2014\\/03%20Lil%20Boosie%20-%20Turn%20The%20Beat%20Up.mp3"},{"name":"Independent Club","url":"https:\\/\\/ia800408.us.archive.org\\/16\\/items\\/DJ_Kurupt_-_Narley_Lil_Boosie-2014\\/04%20Lil%20Boosie%20-%20Independent%20Club.mp3"}]'),
(89, 'Miles Davis And The Jazz Giants', 'https://ia802900.us.archive.org/15/items/cd_miles-davis-and-the-jazz-giants_miles-davis-the-jazz-giants-miles-davis-m/cd_miles-davis-and-the-jazz-giants_miles-davis-the-jazz-giants-miles-davis-m_itemimage.png', '[{"name":"walkin","url":"https:\\/\\/ia802900.us.archive.org\\/15\\/items\\/cd_miles-davis-and-the-jazz-giants_miles-davis-the-jazz-giants-miles-davis-m\\/disc1\\/04.%20Miles%20Davis%20Sextet%20-%20Walkin%27_sample.mp3"},{"name":"Doxy","url":"https:\\/\\/ia802900.us.archive.org\\/15\\/items\\/cd_miles-davis-and-the-jazz-giants_miles-davis-the-jazz-giants-miles-davis-m\\/disc1\\/05.%20Miles%20Davis%20-%20Doxy_sample.mp3"},{"name":"Bags Groove","url":"https:\\/\\/ia902900.us.archive.org\\/15\\/items\\/cd_miles-davis-and-the-jazz-giants_miles-davis-the-jazz-giants-miles-davis-m\\/disc1\\/06.%20Miles%20Davis%20%26%20The%20Modern%20Jazz%20Giants%20-%20Bags%27%20Groove_sample.mp3"}]'),
(90, 'Kid Rock', 'https://ia800804.us.archive.org/5/items/cd_kid-rock_kid-rock-hank-williams-jr./cd_kid-rock_kid-rock-hank-williams-jr._itemimage.png', '[{"name":"Rock \\u2019n\\u2019 Roll Pain Train","url":"https:\\/\\/ia800804.us.archive.org\\/5\\/items\\/cd_kid-rock_kid-rock-hank-williams-jr.\\/disc1\\/01.%20Kid%20Rock%20-%20Rock%20%27n%27%20Roll%20Pain%20Train_sample.mp3"},{"name":"Cadillac Pussy - Kid Rock; Hank Williams, Jr.","url":"https:\\/\\/ia800804.us.archive.org\\/5\\/items\\/cd_kid-rock_kid-rock-hank-williams-jr.\\/disc1\\/02.%20Kid%20Rock%3B%20Hank%20Williams%2C%20Jr.%20-%20Cadillac%20Pussy_sample.mp3"},{"name":"Feel Like Makin\\u2019 Love","url":"https:\\/\\/ia800804.us.archive.org\\/5\\/items\\/cd_kid-rock_kid-rock-hank-williams-jr.\\/disc1\\/03.%20Kid%20Rock%20-%20Feel%20Like%20Makin%27%20Love_sample.mp3"},{"name":"Black Bob","url":"https:\\/\\/ia800804.us.archive.org\\/5\\/items\\/cd_kid-rock_kid-rock-hank-williams-jr.\\/disc1\\/04.%20Kid%20Rock%20-%20Black%20Bob_sample.mp3"}]');

--
-- Index pour les tables exportées
--

--
-- Index pour la table `playlists`
--
ALTER TABLE `playlists`
 ADD UNIQUE KEY `id` (`id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `playlists`
--
ALTER TABLE `playlists`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=91;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
