from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in zentrica/__init__.py
from zentrica import __version__ as version

setup(
	name="zentrica",
	version=version,
	description="Frappe frontend ui",
	author="JMG",
	author_email="grijalva10@gmail.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
