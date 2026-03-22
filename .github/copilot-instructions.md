# Copilot Instructions for This Repository

This repository is used for hands-on Next.js training and practical exercises.
The goal is to keep commits clear, professional, and useful both for learning and for portfolio/recruiter review.

## Commit Message Style

When generating commit messages:

- Use **Conventional Commits**
- Write commit messages in **English**
- Keep the subject line **concise, professional, and specific**
- Focus on the **main change introduced by the staged files**
- Avoid vague messages such as:
  - `update`
  - `changes`
  - `fix stuff`
  - `work in progress`
  - `final version`
  - `test`

## Preferred Commit Types

Prefer only these commit types unless there is a strong reason otherwise:

- `feat` for implementing an exercise requirement or adding a meaningful feature
- `fix` for bug fixes or corrections
- `refactor` for improving code structure without changing behavior
- `docs` for README updates, explanations, or learning notes
- `chore` for setup, tooling, dependencies, configuration, or non-feature maintenance

## Exercise Awareness

Infer the exercise number from the current branch name when possible.

Examples of branch-to-exercise mapping:

- `exercises/01-configuration` → mention `exercise 01`
- `exercises/02-routes` → mention `exercise 02`
- `exercises/03-react-server-components` → mention `exercise 03`
- `exercises/04-naviguer-link` → mention `exercise 04`
- `exercises/05-layout` → mention `exercise 05`
- `exercises/06-styling` → mention `exercise 06`

If the branch name clearly refers to one exercise, include that exercise number in the commit message when relevant.

## Message Quality Rules

Good commit messages should:

- describe the real purpose of the change
- stay short, but still informative
- sound professional and recruiter-friendly
- reflect clean engineering habits
- match the staged changes only

Do not mention files unless necessary.
Do not describe trivial implementation details if a higher-level summary is clearer.

## Recommended Patterns

Use patterns like:

- `chore: start exercise 01 configuration`
- `chore: configure project tooling for exercise 01`
- `feat: implement routing requirements for exercise 02`
- `feat: add server component example for exercise 03`
- `refactor: simplify layout structure for exercise 05`
- `fix: resolve styling issue in exercise 06`
- `docs: add notes for exercise 04`

## Training Context

This repository is a learning repository, but commit messages should still look professional.
Prefer messages that show:

- structured progress
- clear intent
- good naming discipline
- practical understanding of Next.js concepts

## Final Rule

When in doubt:

1. identify the main purpose of the staged changes
2. choose the most appropriate Conventional Commit type
3. infer the exercise number from the current branch if possible
4. generate a short, clean, recruiter-friendly message in English