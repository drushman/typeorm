/**
 * Thrown when required driver's package is not installed.
 *
 * @internal
 */
export class DriverPackageNotInstalledError extends Error {
    name = "DriverPackageNotInstalledError";

    constructor(driverName: string, packageName: string) {
        super();
        this.message = `${driverName} package has not been found installed. Try to install it: npm install ${packageName} --save`;
    }

}