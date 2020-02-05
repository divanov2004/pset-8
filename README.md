# Problem Set 8

We're all tic-tac-toe experts now, right? Good, because it's time to modify and enhance the app we wrote together.

If you didn't go through the [Tic-Tac-Toe Walkthrough](https://github.com/ap-principles-ucvts/tic-tac-toe/blob/master/README.md), go and do that now! It's important you understand the steps we took to build the original app. Sure, you might be able to get away with skipping some steps for this problem set, but I promise you'll be hopelessly lost on [Problem Set 9](https://github.com/ap-principles-ucvts/pset-9-skeleton/blob/master/README.md).

## Getting Started

To get started, create a [GitHub](https://github.com/) repository to store your code. When you're finished, clone my skeleton to get all of the starter code and instructions. Setup a remote to push your code to your repository instead of mine.

### Setup

1. Login to your GitHub account and create a new repository named `pset-8`.
2. In the terminal, navigate to your `APCSP` directory on the `Desktop`.

```
$ cd ~/Desktop/APCSP
```

1. Clone your `tic-tac-toe` repository into a directory named `pset-8`. Replace `YOUR-USERNAME` with your actual username. If you didn't push your original `tic-tac-toe` repository up to GitHub, just copy the folder as needed.

```
$ git clone git@github.com:YOUR-USERNAME/tic-tac-toe.git pset-8
```

4. Change into your newly created `pset-8` directory.

```
$ cd pset-8
```

5. Overwrite the remote, which originally points at your original repository.

```
$ git remote rename origin upstream
```

6. Add a new remote that points at your `pset-8` repository. Replace `YOUR-USERNAME` with your actual username.

```
$ git remote add origin git@github.com:YOUR-USERNAME/pset-8.git
```

You should now have another copy of the working version of your tic-tac-toe app. Your job is to modify and enhance it as requested.

## Feature Requests

Now that you have a functional tic-tac-toe app, it's time to make it your own. Take a look at the list of feature requests below. Your job is to choose some of these feature requests and integrate them into your app.

- Allow players to keep score (i.e., how many games has each player won).
- Allow players to determine who goes first (instead of X always going first).
- Style your app so that it is responsive to mobile users (i.e., it should be optimized to work well on your phone or tablet).
- Allow a human player to play against a better-than-random computer player.

If you choose the fourth feature request (i.e., computer players), then you don't need to choose any other feature requests to implememnt. Otherwise, you need to choose **two** feature requests.

## Deadline

Please read very carefully. Historically, most students lose points on problem sets for simply failing to read the instructions and requirements.

- February 9, 2020, at 11:59pm.

If you submit your problem set at midnight (i.e., February 10, 2020, at 12:00am), it is considered **late**!

### Submission Requirements

- Your code **must** compile. Code that fails to meet this minimum requirement will not be accepted.
- There must be **at least** 25 unique commits to your repository.
- Your code must meet the selected requiremens outlined in the _Feature Requests_ sections.
- Your code must adhere to the course style guidelines.

Happy coding!
