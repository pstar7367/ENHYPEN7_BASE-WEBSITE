"use strict";

/* =========================================
   ENHYPEN7_BASE WEBSITE
   Interactive navigation and artist calendar
========================================= */

/* MOBILE NAVIGATION */

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
const navLinks = document.querySelectorAll(".nav-link");

function closeMenu() {
  if (!menuToggle || !mainNav) return;

  mainNav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation");
}

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation" : "Open navigation"
    );
  });

  mainNav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("click", event => {
    if (
      !mainNav.contains(event.target) &&
      !menuToggle.contains(event.target)
    ) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeMenu();
  });
}

/* ACTIVE NAVIGATION LINK */

const sections = document.querySelectorAll("main section[id]");

if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        const matchingLink = document.querySelector(
          `.nav-link[href="#${entry.target.id}"]`
        );

        navLinks.forEach(link => {
          link.classList.toggle("active", link === matchingLink);
        });
      });
    },
    {
      rootMargin: "-25% 0px -60% 0px",
      threshold: 0
    }
  );

  sections.forEach(section => sectionObserver.observe(section));
}

/* BACK TO TOP */

const backToTop = document.getElementById("backToTop");

function updateBackToTop() {
  if (!backToTop) return;

  backToTop.classList.toggle("visible", window.scrollY > 450);
}

window.addEventListener("scroll", updateBackToTop, {
  passive: true
});

updateBackToTop();

/* FOOTER YEAR */

const currentYear = document.getElementById("currentYear");

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

/* =========================================
   ARTIST SCHEDULE DATA

   Dates use YYYY-MM-DD.
   Local times are identified when known.
   Unconfirmed items are labelled accordingly.
========================================= */

const scheduleEvents = {

  /* =========================================
     ENHYPEN — JANUARY 2026
  ========================================= */

  "2026-01-16": [
    {
      artist: "enhypen",
      title: "THE SIN : VANISH — Fan Showcase",
      time: "8:00 PM KST"
    }
  ],

  "2026-01-21": [
    {
      artist: "enhypen",
      title: "THE SIN : VANISH — Seoul Pop-up Opens",
      time: "Opening day; operating hours may vary"
    }
  ],

  "2026-01-22": [
    {
      artist: "enhypen",
      title: "THE SIN : VANISH — MusicKorea Fansign",
      time: "9:00 PM KST"
    }
  ],

  "2026-01-23": [
    {
      artist: "enhypen",
      title: "THE SIN : VANISH — SOUNDWAVE Fansign",
      time: "8:30 PM KST"
    }
  ],

  "2026-01-25": [
    {
      artist: "enhypen",
      title: "SBS Inkigayo Recording",
      time: "2:20 AM KST"
    },
    {
      artist: "enhypen",
      title: "SBS Inkigayo Mini Fanmeeting",
      time: "After pre-recording"
    }
  ],

  "2026-01-27": [
    {
      artist: "enhypen",
      title: "THE SIN : VANISH — Seoul Pop-up Final Day",
      time: "Closing day"
    }
  ],

  "2026-01-30": [
    {
      artist: "enhypen",
      title: "VAMPIRE IS COMING — Seoul Event",
      time: "4:00 PM–5:00 PM KST"
    }
  ],

  /* =========================================
     ENHYPEN — FEBRUARY 2026
  ========================================= */

  "2026-02-11": [
    {
      artist: "enhypen",
      title: "2026 D Awards",
      time: "Event time not specified"
    }
  ],

  "2026-02-12": [
    {
      artist: "enhypen",
      title: "THE SIN : VANISH — M2U RECORD Fansign",
      time: "8:30 PM KST"
    }
  ],

  /* =========================================
     ENHYPEN — MARCH 2026
  ========================================= */

  "2026-03-05": [
    {
      artist: "enhypen",
      title: "WALK THE LINE — Cinema Screening",
      time: "Time not specified"
    }
  ],

  "2026-03-07": [
    {
      artist: "enhypen",
      title: "WALK THE LINE — Cinema Screening",
      time: "Time not specified"
    }
  ],

  "2026-03-08": [
    {
      artist: "enhypen",
      title: "Previously Listed Fansign / Festival Event",
      time: "Details require verification"
    }
  ],

  "2026-03-10": [
    {
      artist: "enhypen",
      title: "BELIFT LAB Announces Heeseung's Departure from ENHYPEN",
      time: "Announcement date"
    },
    {
      artist: "enhypen",
      title: "Heeseung Fancall — Reported, Unverified",
      time: "No independently confirmed time or event notice"
    }
  ],

  "2026-03-14": [
    {
      artist: "enhypen",
      title: "Previously Listed Fansign / Festival Event",
      time: "Details require verification"
    }
  ],

  "2026-03-21": [
    {
      artist: "enhypen",
      title: "Previously Listed Fansign / Festival Event",
      time: "Details require verification"
    }
  ],

  "2026-03-28": [
    {
      artist: "enhypen",
      title: "Release Fan Party",
      time: "Afternoon; exact time not specified"
    }
  ],

  /* =========================================
     ENHYPEN — APRIL 2026
  ========================================= */

  "2026-04-05": [
    {
      artist: "enhypen",
      title: "Jungwon — Weverse Live",
      time: "Time not specified"
    }
  ],

  "2026-04-06": [
    {
      artist: "enhypen",
      title: "Reported Member Fancall Schedule",
      time: "Retailer schedule; details require verification"
    }
  ],

  "2026-04-07": [
    {
      artist: "enhypen",
      title: "Reported Member Fancall Schedule",
      time: "Retailer schedule; details require verification"
    },
    {
      artist: "enhypen",
      title: "Jungwon and Jay — Weverse Live",
      time: "Time not specified"
    }
  ],

  "2026-04-13": [
    {
      artist: "enhypen",
      title: "Jay and Ni-ki — Weverse Live",
      time: "Time not specified"
    },
    {
      artist: "enhypen",
      title: "Sunoo and Jungwon — Weverse Live",
      time: "Time not specified"
    },
    {
      artist: "enhypen",
      title: "Sunghoon — Weverse Live",
      time: "Time not specified"
    }
  ],

  "2026-04-15": [
    {
      artist: "enhypen",
      title: "Jake and Sunghoon — Weverse Live",
      time: "Time not specified"
    }
  ],

  "2026-04-19": [
    {
      artist: "enhypen",
      title: "Jungwon — Weverse Live",
      time: "Time not specified"
    }
  ],

  "2026-04-20": [
    {
      artist: "enhypen",
      title: "Jay — Weverse Live",
      time: "Time not specified"
    }
  ],

  "2026-04-23": [
    {
      artist: "enhypen",
      title: "Jungwon — Weverse Live",
      time: "Multiple sessions reported"
    }
  ],

  "2026-04-24": [
    {
      artist: "enhypen",
      title: "ENHYPEN Pop-up — Orange County Opens",
      time: "Local operating hours"
    }
  ],

  "2026-04-27": [
    {
      artist: "enhypen",
      title: "Jungwon — Weverse Live",
      time: "Time not specified"
    }
  ],

  "2026-04-28": [
    {
      artist: "enhypen",
      title: "Ni-ki — Weverse Live",
      time: "Time not specified"
    }
  ],

  "2026-04-30": [
    {
      artist: "enhypen",
      title: "ENHYPEN Pop-up — Bangkok Opens",
      time: "10:00 AM–10:00 PM ICT"
    }
  ],

  /* =========================================
     ENHYPEN — MAY 2026
  ========================================= */

  "2026-05-01": [
    {
      artist: "enhypen",
      title: "BLOOD SAGA — Seoul Concert",
      time: "7:00 PM KST"
    }
  ],

  "2026-05-02": [
    {
      artist: "enhypen",
      title: "BLOOD SAGA — Seoul Concert",
      time: "6:00 PM KST"
    }
  ],

  "2026-05-03": [
    {
      artist: "enhypen",
      title: "BLOOD SAGA — Seoul Concert",
      time: "5:00 PM KST"
    }
  ],

  "2026-05-07": [
    {
      artist: "enhypen",
      title: "ENHYPEN Pop-up — Hong Kong Opens",
      time: "11:00 AM–9:00 PM HKT"
    }
  ],

  "2026-05-10": [
    {
      artist: "enhypen",
      title: "Hello, Bangkok Festival",
      time: "Time not specified"
    }
  ],

  "2026-05-16": [
    {
      artist: "enhypen",
      title: "ASEA 2026 — Japan",
      time: "Time not specified"
    }
  ],

  "2026-05-21": [
    {
      artist: "enhypen",
      title: "ENCHIN Character Pop-up — Seoul Opens",
      time: "10:30 AM–10:00 PM KST"
    }
  ],

  "2026-05-31": [
    {
      artist: "enhypen",
      title: "Bangkok, Hong Kong, Orange County and Seoul Pop-ups — Final Day",
      time: "Closing day; local hours vary"
    }
  ],

  /* =========================================
     ENHYPEN — JUNE 2026
  ========================================= */

  "2026-06-06": [
    {
      artist: "enhypen",
      title: "Weverse Con Festival",
      time: "Time not specified"
    }
  ],

  "2026-06-21": [
    {
      artist: "enhypen",
      title: "Prada-Related Appearance — Milan",
      time: "Time not specified"
    }
  ],

  "2026-06-25": [
    {
      artist: "enhypen",
      title: "ENCHIN Character Pop-up — Bangkok",
      time: "10:00 AM–10:00 PM ICT"
    }
  ],

  "2026-06-26": [
    {
      artist: "enhypen",
      title: "ENCHIN Character Pop-up — Metro Manila",
      time: "Local operating hours"
    }
  ],

  "2026-06-27": [
    {
      artist: "enhypen",
      title: "ENCHIN Character Pop-up — Petaling Jaya",
      time: "Local operating hours"
    }
  ],

  /* =========================================
     EVAN — JUNE 2026
  ========================================= */

  "2026-06-17": [
    {
      artist: "evan",
      title: "RIDE OR DIE — Release Hashtag Event Opens",
      time: "2:00 PM KST"
    }
  ],

  "2026-06-22": [
    {
      artist: "evan",
      title: "RIDE OR DIE — Digital Single Release",
      time: "6:00 PM KST"
    },
    {
      artist: "evan",
      title: "Overflow — Track Release",
      time: "6:00 PM KST; included on RIDE OR DIE"
    },
    {
      artist: "evan",
      title: "RIDE OR DIE — Official Music Video Premiere",
      time: "6:00 PM KST"
    },
    {
      artist: "evan",
      title: "RIDE OR DIE — Track Download, Streaming and MV Events Begin",
      time: "Online promotional events"
    }
  ],

  "2026-06-26": [
    {
      artist: "evan",
      title: "The Fillin' Live with EVAN — Participation Event",
      time: "Event date; exact appearance time requires confirmation"
    },
    {
      artist: "evan",
      title: "EVAN Weverse DM — One-Month Celebration Event Opens",
      time: "3:00 PM KST"
    },
    {
      artist: "enhypen",
      title: "ENCHIN Character Pop-up — Metro Manila",
      time: "Local operating hours"
    }
  ],

  "2026-06-27": [
    {
      artist: "evan",
      title: "RIDE OR DIE — Promotional Period",
      time: "Release promotions ongoing"
    },
    {
      artist: "enhypen",
      title: "ENCHIN Character Pop-up — Petaling Jaya",
      time: "Local operating hours"
    }
  ],

  /* =========================================
     EVAN — JULY 2026
  ========================================= */

  "2026-07-01": [
    {
      artist: "evan",
      title: "RIDE OR DIE — Music Show Promotions",
      time: "Individual broadcast schedule varies"
    },
    {
      artist: "enhypen",
      title: "ENHYPEN Pop-up — Lima Opens",
      time: "10:00 AM–8:00 PM PET"
    }
  ],

  "2026-07-02": [
    {
      artist: "enhypen",
      title: "ENHYPEN Pop-up — Mexico City Opens",
      time: "10:00 AM–8:00 PM local time"
    }
  ],

  "2026-07-03": [
    {
      artist: "evan",
      title: "KBS Music Bank — RIDE OR DIE Pre-recording",
      time: "12:45 PM KST"
    },
    {
      artist: "enhypen",
      title: "ENCHIN Character Pop-up — Bangkok Final Day",
      time: "Closing day"
    }
  ],

  "2026-07-05": [
    {
      artist: "evan",
      title: "RIDE OR DIE — Download, Streaming and MV Events End",
      time: "11:59 PM KST"
    }
  ],

  "2026-07-08": [
    {
      artist: "enhypen",
      title: "BLOOD SAGA — Lima, Peru",
      time: "Time not specified"
    }
  ],

  "2026-07-11": [
    {
      artist: "enhypen",
      title: "BLOOD SAGA — Mexico City",
      time: "Time not specified"
    }
  ],

  "2026-07-12": [
    {
      artist: "evan",
      title: "SBS Inkigayo — RIDE OR DIE Performance",
      time: "3:10 PM KST"
    },
    {
      artist: "evan",
      title: "SBS Inkigayo — Mini Fanmeeting",
      time: "11:45 AM KST"
    },
    {
      artist: "enhypen",
      title: "BLOOD SAGA — Mexico City Additional Show",
      time: "Time not specified"
    }
  ],

  "2026-07-13": [
    {
      artist: "evan",
      title: "EVAN Weverse DM — One-Month Event Prize Distribution",
      time: "Distribution date"
    }
  ],

  "2026-07-17": [
    {
      artist: "enhypen",
      title: "BLOOD SAGA — Dallas, Texas",
      time: "Time not specified"
    }
  ],

  "2026-07-18": [
    {
      artist: "enhypen",
      title: "BLOOD SAGA — Dallas, Texas",
      time: "Time not specified"
    }
  ],

  "2026-07-21": [
    {
      artist: "enhypen",
      title: "BLOOD SAGA — San Diego, California",
      time: "Time not specified"
    }
  ],

  "2026-07-26": [
    {
      artist: "enhypen",
      title: "BLOOD SAGA — Tacoma, Washington",
      time: "Time not specified"
    }
  ],

  "2026-07-28": [
    {
      artist: "enhypen",
      title: "BLOOD SAGA — Oakland, California",
      time: "Time not specified"
    }
  ],

  "2026-07-29": [
    {
      artist: "enhypen",
      title: "BLOOD SAGA — Oakland, California",
      time: "Time not specified"
    }
  ],

  /* =========================================
     ENHYPEN — AUGUST 2026
  ========================================= */

  "2026-08-01": [
    {
      artist: "enhypen",
      title: "BLOOD SAGA — Las Vegas",
      time: "Time not specified"
    }
  ],

  "2026-08-08": [
    {
      artist: "enhypen",
      title: "BLOOD SAGA — Busan Concert",
      time: "Time not specified"
    }
  ],

  "2026-08-09": [
    {
      artist: "enhypen",
      title: "BLOOD SAGA — Busan Concert",
      time: "Time not specified"
    }
  ],

  "2026-08-21": [
    {
      artist: "enhypen",
      title: "THE SIN : BLISS — Seoul Pop-up Opens",
      time: "11:00 AM–8:00 PM KST"
    }
  ],

  "2026-08-27": [
    {
      artist: "evan",
      title: "2026 K-WORLD DREAM AWARDS",
      time: "6:30 PM KST"
    }
  ],

  "2026-08-29": [
    {
      artist: "enhypen",
      title: "THE SIN : BLISS — APPLE MUSIC Fansign",
      time: "6:30 PM KST"
    }
  ],

  "2026-08-30": [
    {
      artist: "enhypen",
      title: "SBS Inkigayo Pre-recording and Mini Fanmeeting",
      time: "Pre-recording: 9:25 AM KST"
    }
  ],

  "2026-08-31": [
    {
      artist: "enhypen",
      title: "THE SIN : BLISS — MAKESTAR Fansign",
      time: "8:30 PM KST"
    }
  ],

  /* =========================================
     EVAN — SEPTEMBER 2026
  ========================================= */

  "2026-09-07": [
    {
      artist: "evan",
      title: "DEATH OF ME — 1st Mini Album Release",
      time: "6:00 PM KST"
    },
    {
      artist: "evan",
      title: "DEATH OF ME — Debut Showcase",
      time: "7:00 PM KST"
    },
    {
      artist: "evan",
      title: "DEATH OF ME — Track Download, Streaming and MV Events Begin",
      time: "Online promotional events"
    }
  ],

  "2026-09-09": [
    {
      artist: "evan",
      title: "DEATH OF ME — Blue Dream Media Open Fansign",
      time: "7:00 PM KST"
    }
  ],

  "2026-09-15": [
    {
      artist: "evan",
      title: "SBS Life — The Show Recording",
      time: "Time not specified"
    },
    {
      artist: "evan",
      title: "DEATH OF ME — Seoul Pop-up Opens",
      time: "11:00 AM–8:00 PM KST"
    }
  ],

  "2026-09-16": [
    {
      artist: "evan",
      title: "MBC M — Show Champion Recording",
      time: "Time not specified"
    },
    {
      artist: "enhypen",
      title: "THE SIN : BLISS — JUMPUPENT Fansign",
      time: "8:30 PM KST"
    }
  ],

  "2026-09-17": [
    {
      artist: "enhypen",
      title: "THE SIN : BLISS — BDM Fansign",
      time: "8:30 PM KST"
    }
  ],

  "2026-09-19": [
    {
      artist: "evan",
      title: "MBC Show! Music Core",
      time: "Time not specified"
    },
    {
      artist: "evan",
      title: "TMA 2026 Event",
      time: "Time not specified"
    }
  ],

  "2026-09-20": [
    {
      artist: "evan",
      title: "DEATH OF ME — Seoul Pop-up Final Day",
      time: "Closing day"
    }
  ],

  "2026-09-24": [
    {
      artist: "enhypen",
      title: "Jay — Shh, Secret Stove, Episode 1 Premiere",
      time: "Premiere date; broadcast time requires confirmation"
    }
  ],

  "2026-09-26": [
    {
      artist: "evan",
      title: "DEATH OF ME — Macau Event",
      time: "7:30 PM KST"
    }
  ],

  "2026-09-27": [
    {
      artist: "evan",
      title: "DEATH OF ME — Macau Event",
      time: "7:30 PM KST"
    }
  ],

  "2026-09-29": [
    {
      artist: "enhypen",
      title: "SPOOKY ENCHIN — Seoul Pop-up Opens",
      time: "11:00 AM–8:00 PM KST"
    }
  ],

  "2026-09-30": [
    {
      artist: "evan",
      title: "DEATH OF ME — Online Autograph / Long Talk Event",
      time: "6:45 PM KST"
    }
  ],

  /* =========================================
     EVAN — OCTOBER 2026
  ========================================= */

  "2026-10-01": [
    {
      artist: "evan",
      title: "M Countdown Performance",
      time: "6:00 PM KST"
    },
    {
      artist: "evan",
      title: "MUSICART Fansign",
      time: "8:30 PM KST"
    }
  ],

  "2026-10-02": [
    {
      artist: "evan",
      title: "EVAN x For:Rest Live",
      time: "7:00 PM KST"
    },
    {
      artist: "evan",
      title: "JUMPUPENT — DEATH OF ME Fansign",
      time: "7:30 PM KST"
    }
  ],

  "2026-10-03": [
    {
      artist: "evan",
      title: "MUSIC&DRAMA — DEATH OF ME Fansign",
      time: "6:00 PM KST"
    }
  ],

  "2026-10-04": [
    {
      artist: "evan",
      title: "SBS Inkigayo Performance",
      time: "3:20 PM KST"
    },
    {
      artist: "evan",
      title: "WITHMUU — DEATH OF ME Fansign",
      time: "6:00 PM KST"
    }
  ],

  "2026-10-05": [
    {
      artist: "evan",
      title: "YZY Fancall — Round 1",
      time: "8:30 PM KST"
    }
  ],

  "2026-10-06": [
    {
      artist: "evan",
      title: "YZY Fancall — Round 2",
      time: "8:30 PM KST"
    }
  ],

  "2026-10-09": [
    {
      artist: "evan",
      title: "NBA Fan Interactions — Macau",
      time: "5:00 PM"
    },
    {
      artist: "enhypen",
      title: "SPOOKY ENCHIN — Seoul Pop-up Final Day",
      time: "Closing day"
    }
  ],

  "2026-10-10": [
    {
      artist: "evan",
      title: "NBA Fan Day — Macau",
      time: "4:30 PM"
    },
    {
      artist: "evan",
      title: "Immortal Songs 2 — Part 1 Broadcast",
      time: "6:05 PM KST"
    }
  ],

  "2026-10-11": [
    {
      artist: "evan",
      title: "YZY Fansign — Shanghai",
      time: "Time not specified"
    }
  ],

  "2026-10-13": [
    {
      artist: "evan",
      title: "YZY Fancall — Round 3",
      time: "7:00 PM KST"
    }
  ],

  "2026-10-15": [
    {
      artist: "evan",
      title: "EVAN Birthday",
      time: "All day"
    },
    {
      artist: "evan",
      title: "Japan Online Signing / Online Long Talk",
      time: "Around 6:00 PM JST"
    }
  ],

  "2026-10-17": [
    {
      artist: "evan",
      title: "K-Live Festival BAND:AGE — Bangkok",
      time: "11:00 PM"
    },
    {
      artist: "evan",
      title: "Immortal Songs 2 — Part 2 Broadcast",
      time: "6:05 PM KST"
    },
    {
      artist: "enhypen",
      title: "BLOOD SAGA — Macau",
      time: "7:30 PM"
    }
  ],

  "2026-10-18": [
    {
      artist: "evan",
      title: "NOL Festival",
      time: "4:00 PM"
    },
    {
      artist: "enhypen",
      title: "BLOOD SAGA — Macau",
      time: "6:30 PM"
    }
  ],

  "2026-10-20": [
    {
      artist: "evan",
      title: "YZY Fancall — Round 4",
      time: "8:30 PM"
    }
  ],

  "2026-10-24": [
    {
      artist: "evan",
      title: "YZY Fansign — Beijing",
      time: "4:00 PM"
    }
  ],

  "2026-10-30": [
    {
      artist: "evan",
      title: "Japan Online Signing / Online Long Talk",
      time: "Around 6:00 PM JST"
    }
  ],

  "2026-10-31": [
    {
      artist: "evan",
      title: "Tokyo Offline Talk Event",
      time: "Time and venue details provided to participants"
    },
    {
      artist: "evan",
      title: "Tokyo Premium Signing and Hi-Touch Event",
      time: "Time and venue details provided to participants"
    },
    {
      artist: "evan",
      title: "Tokyo Offline Signing / Mini Talk / Hi-Touch Event",
      time: "Time and venue details provided to participants"
    }
  ],

  /* =========================================
     EVAN — NOVEMBER 2026
  ========================================= */

  "2026-11-14": [
    {
      artist: "evan",
      title: "Kyoto Offline Signing / Mini Talk / Hi-Touch Event",
      time: "Time and venue details provided to participants"
    },
    {
      artist: "evan",
      title: "Kyoto Premium Signing Event",
      time: "Time and venue details provided to participants"
    }
  ]
};

/* =========================================
   MULTI-DAY POP-UP SCHEDULES

   Every date in each range receives its own
   calendar entry, including overlapping dates.
========================================= */

const scheduleRanges = [

  {
    artist: "enhypen",
    title: "THE SIN : VANISH — Seoul Pop-up Store",
    start: "2026-01-21",
    end: "2026-01-27",
    time: "Operating hours vary by day"
  },

  {
    artist: "enhypen",
    title: "ENHYPEN Pop-up Store — Orange County",
    start: "2026-04-24",
    end: "2026-05-31",
    time: "Local operating hours"
  },

  {
    artist: "enhypen",
    title: "ENHYPEN Pop-up Store — Bangkok",
    start: "2026-04-30",
    end: "2026-05-31",
    time: "10:00 AM–10:00 PM ICT"
  },

  {
    artist: "enhypen",
    title: "ENHYPEN Pop-up Store — Hong Kong",
    start: "2026-05-07",
    end: "2026-05-31",
    time: "11:00 AM–9:00 PM HKT"
  },

  {
    artist: "enhypen",
    title: "ENCHIN Character Pop-up — Seoul",
    start: "2026-05-21",
    end: "2026-05-31",
    time: "10:30 AM–10:00 PM KST"
  },

  {
    artist: "enhypen",
    title: "ENCHIN Character Pop-up — Bangkok",
    start: "2026-06-25",
    end: "2026-07-03",
    time: "10:00 AM–10:00 PM ICT"
  },

  {
    artist: "enhypen",
    title: "ENCHIN Character Pop-up — Metro Manila",
    start: "2026-06-26",
    end: "2026-07-26",
    time: "Local operating hours"
  },

  {
    artist: "enhypen",
    title: "ENCHIN Character Pop-up — Petaling Jaya",
    start: "2026-06-27",
    end: "2026-07-19",
    time: "Local operating hours"
  },

  {
    artist: "enhypen",
    title: "ENHYPEN Pop-up Store — Lima",
    start: "2026-07-01",
    end: "2026-07-12",
    time: "10:00 AM–8:00 PM PET"
  },

  {
    artist: "enhypen",
    title: "ENHYPEN Pop-up Store — Mexico City",
    start: "2026-07-02",
    end: "2026-07-26",
    time: "10:00 AM–8:00 PM local time"
  },

  {
    artist: "enhypen",
    title: "ENCHIN Character Pop-up — Jakarta",
    start: "2026-07-31",
    end: "2026-08-30",
    time: "10:00 AM–10:00 PM WIB"
  },

  {
    artist: "enhypen",
    title: "ENCHIN Character Pop-up — Taipei",
    start: "2026-08-07",
    end: "2026-08-31",
    time: "Local operating hours"
  },

  {
    artist: "enhypen",
    title: "THE SIN : BLISS — Seoul Pop-up Store",
    start: "2026-08-21",
    end: "2026-08-26",
    time: "11:00 AM–8:00 PM KST"
  },

  {
    artist: "evan",
    title: "DEATH OF ME — Seoul Pop-up Store",
    start: "2026-09-15",
    end: "2026-09-20",
    time: "11:00 AM–8:00 PM KST"
  },

  {
    artist: "enhypen",
    title: "SPOOKY ENCHIN — Seoul Pop-up Store",
    start: "2026-09-29",
    end: "2026-10-09",
    time: "11:00 AM–8:00 PM KST"
  }
];

/* =========================================
   EXPAND MULTI-DAY EVENTS

   Existing events on the same date are kept.
========================================= */

function addScheduleRange(range) {
  const startDate = new Date(`${range.start}T12:00:00Z`);
  const endDate = new Date(`${range.end}T12:00:00Z`);

  for (
    let date = new Date(startDate);
    date <= endDate;
    date.setUTCDate(date.getUTCDate() + 1)
  ) {
    const key = date.toISOString().slice(0, 10);

    if (!scheduleEvents[key]) {
      scheduleEvents[key] = [];
    }

    const alreadyAdded = scheduleEvents[key].some(event =>
      event.artist === range.artist &&
      event.title === range.title
    );

    if (!alreadyAdded) {
      scheduleEvents[key].push({
        artist: range.artist,
        title: range.title,
        time: range.time
      });
    }
  }
}

scheduleRanges.forEach(addScheduleRange);

/* =========================================
   CALENDAR ELEMENTS
========================================= */

const monthLabel = document.getElementById("monthLabel");
const miniDays = document.getElementById("miniDays");
const calendarGrid = document.getElementById("calendarGrid");
const selectedDateTitle = document.getElementById("selectedDateTitle");
const selectedEvents = document.getElementById("selectedEvents");
const previousMonthButton = document.getElementById("prevMonth");
const nextMonthButton = document.getElementById("nextMonth");
const artistFilterButtons = document.querySelectorAll(".artist-filter");

let activeArtist = "all";
let currentMonth = new Date(2026, 9, 1);
let selectedDate = "2026-10-15";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

function makeDateKey(year, monthIndex, day) {
  const month = String(monthIndex + 1).padStart(2, "0");
  const date = String(day).padStart(2, "0");

  return `${year}-${month}-${date}`;
}

function parseDateKey(key) {
  const [year, month, day] = key.split("-").map(Number);

  return new Date(year, month - 1, day);
}

function getEventsForDate(key) {
  const events = scheduleEvents[key] || [];

  if (activeArtist === "all") {
    return events;
  }

  return events.filter(event => event.artist === activeArtist);
}

function formatLongDate(key) {
  const date = parseDateKey(key);

  return date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric"
  });
}

function getArtistName(artist) {
  return artist === "enhypen" ? "ENHYPEN" : "EVAN";
}

function createBlankCell() {
  const blank = document.createElement("div");
  blank.className = "blank-cell";
  blank.setAttribute("aria-hidden", "true");

  return blank;
}

/* =========================================
   SELECTED DATE DETAILS
========================================= */

function renderSelectedDate() {
  if (!selectedDateTitle || !selectedEvents) return;

  selectedDateTitle.textContent = formatLongDate(selectedDate);
  selectedEvents.replaceChildren();

  const dayEvents = getEventsForDate(selectedDate);

  if (dayEvents.length === 0) {
    const emptyMessage = document.createElement("p");
    emptyMessage.className = "empty-event";
    emptyMessage.textContent =
      "No listed events for this artist on this date.";

    selectedEvents.appendChild(emptyMessage);
    return;
  }

  dayEvents.forEach(event => {
    const card = document.createElement("article");
    card.className = "selected-event-item";

    const artist = document.createElement("span");
    artist.className = "event-artist";
    artist.textContent = getArtistName(event.artist);

    const title = document.createElement("h5");
    title.textContent = event.title;

    const time = document.createElement("p");
    time.textContent = event.time;

    card.append(artist, title, time);
    selectedEvents.appendChild(card);
  });
}

/* =========================================
   MINI CALENDAR
========================================= */

function renderMiniCalendar(year, monthIndex) {
  if (!miniDays) return;

  miniDays.replaceChildren();

  const firstWeekday = new Date(year, monthIndex, 1).getDay();
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();

  for (let index = 0; index < firstWeekday; index++) {
    const blank = document.createElement("span");
    blank.setAttribute("aria-hidden", "true");
    miniDays.appendChild(blank);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const key = makeDateKey(year, monthIndex, day);
    const button = document.createElement("button");
    const hasEvents = getEventsForDate(key).length > 0;
    const isSelected = key === selectedDate;

    button.type = "button";
    button.textContent = day;
    button.classList.toggle("has-event", hasEvents);
    button.classList.toggle("selected", isSelected);
    button.setAttribute("aria-pressed", String(isSelected));
    button.setAttribute(
      "aria-label",
      `${formatLongDate(key)}${hasEvents ? ", has events" : ""}`
    );

    button.addEventListener("click", () => {
      selectedDate = key;
      renderCalendar();
    });

    miniDays.appendChild(button);
  }
}

/* =========================================
   MAIN MONTH GRID
========================================= */

function renderMonthGrid(year, monthIndex) {
  if (!calendarGrid) return;

  calendarGrid.replaceChildren();

  const firstWeekday = new Date(year, monthIndex, 1).getDay();
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();

  for (let index = 0; index < firstWeekday; index++) {
    calendarGrid.appendChild(createBlankCell());
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const key = makeDateKey(year, monthIndex, day);
    const dayEvents = getEventsForDate(key);

    const cell = document.createElement("div");
    cell.className = "day-cell";
    cell.tabIndex = 0;
    cell.setAttribute("role", "button");
    cell.setAttribute("aria-pressed", String(key === selectedDate));
    cell.setAttribute("aria-label", formatLongDate(key));

    if (key === selectedDate) {
      cell.classList.add("selected");
    }

    const dateLabel = document.createElement("div");
    dateLabel.className = "day-date";

    const dateNumber = document.createElement("span");
    dateNumber.textContent = day;
    dateLabel.appendChild(dateNumber);

    if (dayEvents.length > 0) {
      const dot = document.createElement("span");
      dot.className = "event-dot";
      dot.textContent = "✦";
      dot.setAttribute("aria-hidden", "true");
      dateLabel.appendChild(dot);
    }

    cell.appendChild(dateLabel);

    dayEvents.slice(0, 2).forEach(event => {
      const eventLabel = document.createElement("div");

      eventLabel.className = `event-name event-${event.artist}`;
      eventLabel.textContent = event.title;

      cell.appendChild(eventLabel);
    });

    if (dayEvents.length > 2) {
      const moreLabel = document.createElement("div");
      moreLabel.className = "more-events";
      moreLabel.textContent = `+${dayEvents.length - 2} more`;

      cell.appendChild(moreLabel);
    }

    cell.addEventListener("click", () => {
      selectedDate = key;
      renderCalendar();
    });

    cell.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        selectedDate = key;
        renderCalendar();
      }
    });

    calendarGrid.appendChild(cell);
  }

  const remainingCells = calendarGrid.children.length % 7;
  const trailingBlanks = remainingCells === 0
    ? 0
    : 7 - remainingCells;

  for (let index = 0; index < trailingBlanks; index++) {
    calendarGrid.appendChild(createBlankCell());
  }
}

/* =========================================
   RENDER CALENDAR
========================================= */

function renderCalendar() {
  const year = currentMonth.getFullYear();
  const monthIndex = currentMonth.getMonth();

  if (monthLabel) {
    monthLabel.textContent = `${monthNames[monthIndex]} ${year}`;
  }

  renderMiniCalendar(year, monthIndex);
  renderMonthGrid(year, monthIndex);
  renderSelectedDate();
}

/* =========================================
   ARTIST FILTERS
========================================= */

artistFilterButtons.forEach(button => {
  button.addEventListener("click", () => {
    activeArtist = button.dataset.artist;

    artistFilterButtons.forEach(filterButton => {
      const isActive = filterButton === button;

      filterButton.classList.toggle("active", isActive);
      filterButton.setAttribute(
        "aria-pressed",
        String(isActive)
      );
    });

    renderCalendar();
  });
});

/* =========================================
   MONTH NAVIGATION
========================================= */

if (previousMonthButton) {
  previousMonthButton.addEventListener("click", () => {
    currentMonth = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() - 1,
      1
    );

    selectedDate = makeDateKey(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      1
    );

    renderCalendar();
  });
}

if (nextMonthButton) {
  nextMonthButton.addEventListener("click", () => {
    currentMonth = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() + 1,
      1
    );

    selectedDate = makeDateKey(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      1
    );

    renderCalendar();
  });
}

/* INITIALISE */

renderCalendar();