

from subprocess import Popen
import argparse


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument('-b', '--build', action='store_true', help='npm run build')
    parser.add_argument('-r', '--run', action='store_true', help='php -t ./dist -S 192.168.1.67:8000')
    parser.add_argument('-rmv', '--remove', action='store_true', help='rm -rf dist')

    args = parser.parse_args()
    Popen(['clear']).wait()
    if args.build:
        Popen(['npm', 'run', 'build']).wait()
    elif args.run:
        Popen(['php', '-t', './dist', '-S', '192.168.1.67:8000']).wait()
    elif args.remove:
        Popen(['rm', '-rf', './dist']).wait()
    else:
        raise ValueError("Invalid argument")

