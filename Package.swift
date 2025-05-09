// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "CapacitorNativeSettings",
    platforms: [.iOS(.v14)],
    products: [
        .library(
            name: "CapacitorNativeSettings",
            targets: ["NativeSettingsPlugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", branch: "main")
    ],
    targets: [
        .target(
            name: "NativeSettingsPlugin",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm")
            ],
            path: "ios/Sources/NativeSettingsPlugin"),
        .testTarget(
            name: "NativeSettingsPluginTests",
            dependencies: ["NativeSettingsPlugin"],
            path: "ios/Tests/NativeSettingsPluginTests")
    ]
)
