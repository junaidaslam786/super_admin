/* eslint-disable no-sparse-arrays */
import React from "react"
import * as Icon from "react-feather"
import {ReactComponent as DashIcon} from '../assets/Icon.svg'
import {ReactComponent as ProfileIcon} from '../assets/Profile.svg'
import {ReactComponent as Users} from '../assets/users.svg'
import {ReactComponent as News} from '../assets/news.svg'
import {ReactComponent as Traders} from "../assets/traders.svg"
import {ReactComponent as Subs} from '../assets/subs.svg'
import {ReactComponent as Property} from "../assets/Property.svg"
import {ReactComponent as Appointments} from '../assets/Appointments.svg'
import {ReactComponent as Blog} from '../assets/Blog.svg'
import {ReactComponent as Community} from '../assets/Community.svg'
import styles from '../config/navigationConfig.module.css'
import { Payment, SummarizeRounded } from "@mui/icons-material"


const navigationConfig = [
  {
    id: "dashboard",
    title: "Dashboard",
    icon: <DashIcon className={styles.icon} />,
    badge: "warning",
    navLink: "/dashboard"
  },
  {
    id: "profile",
    title: "Profile",
    icon: <ProfileIcon className={styles.icon} />,
    badge: "warning",
    navLink: "/profile"
  },
  {
    id: "payments",
    title: "Payments",
    icon: <Payment className={styles.icon} />,
    badge: "warning",
    navLink: "/payments"
  },
  {
    id: "subscriptionManagement",
    title: "Subscription",
    type: "collapse",
    icon: <Subs className={styles.icon} />,
    navLink: "/configuration"
  },
  {
    id: "userManagement",
    title: "User Management",
    type: "collapse",
    icon: <Icon.User className={styles.icon} />,
    children: [
      {
        id: "createUser",
        title: "Create User",
        type: "item",
        icon: <Icon.Circle size={12} />,
        navLink: "/create-user"
      },
      {
        id: "listingUser",
        title: "Users Listing",
        type: "item",
        icon: <Icon.Circle size={12} />,
        navLink: "/all-users"
      },
      {
        id: "listingCustomers",
        title: "Customers",
        type: "item",
        icon: <Icon.Circle size={12} />,
        navLink: "/all-customers"
      },
      {
        id: "listingTraders",
        title: "Traders",
        type: "item",
        icon: <Icon.Circle size={12} />,
        navLink: "/all-traders"
      },
      {
        id: "listingAdmins",
        title: "Admins",
        type: "item",
        icon: <Icon.Circle size={12} />,
        navLink: "/all-admins"
      }
    ]
  },
  {
    id: "property",
    title: "Property",
    type: "collapse",
    icon: <Property className={styles.icon} />,
    children: [
      {
        id: "propertyList2",
        title: "Property List",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin"],
        navLink: "/property-list"
      },
      {
        id: "propertylisting",
        title: "Add Property",
        type: "item",
        icon: <Icon.Circle size={12} />,
        permissions: ["admin"],
        navLink: "/add-property"
      },
      
    ],
  },
  {
    id: "appointments",
    title: "Appointments",
    type: "collapse",
    icon: <Appointments className={styles.icon} />,
    children: [
      {
        id: "all-appointments",
        title: "Appointments Listing",
        type: "item",
        icon: <Icon.Circle size={12} />,
        navLink: "/appointments-list"
      },
      
    ]
  },
  {
    id: "news-management",
    title: "News",
    type: "collapse",
    icon: <News className={styles.icon} />,
    children: [
      {
        id: "add-news",
        title: "Add News",
        type: "item",
        icon: <Icon.Circle size={12} />,
        navLink: "/news/add-news"
      },
      // {
      //   id: "all-news",
      //   title: "News Listing",
      //   type: "item",
      //   icon: <Icon.Circle size={12} />,
      //   navLink: "/news/all-news"
      // }
    ]
  },
  {
    id: "blog-management",
    title: "Blogs",
    type: "collapse",
    icon: <Blog className={styles.icon} />,
    children: [
      {
        id: "add-blog",
        title: "Add Blog",
        type: "item",
        icon: <Icon.Circle size={12} />,
        navLink: "/add-blog"
      },
      {
        id: "all-blog",
        title: "Blogs Listing",
        type: "item",
        icon: <Icon.Circle size={12} />,
        navLink: "/blog/all-blogs"
      }
    ]
  },
  {
    id: "community-qa-management",
    title: "Community",
    type: "collapse",
    icon: <Community className={styles.icon} />,
    children: [
      {
        id: "add-community",
        title: "Add Community",
        type: "item",
        icon: <Icon.Circle size={12} />,
        navLink: "/add-community"
      },
      {
        id: "community-listing",
        title: "Community Listing",
        type: "item",
        icon: <Icon.Circle size={12} />,
        navLink: "/list-community"
      }
    ]
  },
  {
    id: "analytics",
    title: "Analytics & Reports",
    type: "item",
    icon: <Community className={styles.icon} />,
    navLink: "/analytics"
  },
]

export default navigationConfig
